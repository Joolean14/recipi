import React, { useLayoutEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./Contenedorinstruccion.css";
import Navbar from "../navbar/Navbar";
const Contenedorinstruccion = () => {
  const [plato, setPlato] = useState();
  const [ingredientescompletos, setIngredientes] = useState();

  let { plat } = useParams();
  useLayoutEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${plat}`)
      .then(function (response) {
        // handle success
        let dataReceta = response.data.meals;
        let ingredientes = [];
        let cantidades = [];
        let cantIng = [];
        let i = 1;
        let j = 1;

        for (const [key, value] of Object.entries(dataReceta[0])) {
          if (key === "strIngredient" + i) {
            if (value !== null && value !== "") {
              ingredientes.push(value);
              i++;
            }
          }
          if (key === "strMeasure" + j) {
            if (value !== null && value !== "") {
              cantidades.push(value);
              j++;
            }
          }
        }

        for (let k = 0; k < cantidades.length; k++) {
          cantIng.push(ingredientes[k] + " = " + cantidades[k]);
        }

        setIngredientes(cantIng);
        setPlato(dataReceta);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [plat]);

  return (
    <>
      <Navbar />
      <main className="topnavbar">
        {plato === undefined ? (
          <div>Cargando datos...</div>
        ) : (
          plato.map((elem) => {
            return (
              <div key={elem.strMeal} className="titulo">
                <h1>{elem.strMeal}</h1>
                <img src={elem.strMealThumb} alt={elem.strMeal}></img>
                {ingredientescompletos.map((ing) => {
                  return (
                    <div key={ing}>
                      <li>{ing}</li>
                    </div>
                  );
                })}
                <h2>Preparation</h2>
                <p>{elem.strInstructions}</p>
                <Link to="/home/Beef">Back</Link>
              </div>
            );
          })
        )}
      </main>
    </>
  );
};

export default Contenedorinstruccion;
