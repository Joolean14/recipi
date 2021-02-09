import React, { useLayoutEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./Contenedorinstruccion.css";
import Navbar from "../navbar/Navbar";
const Contenedorinstruccion = () => {
  const [plato, setPlato] = useState();
  const [ingredientescompletos, setIngredientes] = useState();
  // const [contador, setContador]=useState();
  // useEffect(() => {
  //   setContador(contador+1);
  // }, [])
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
            if (value !== null && value !== "" && value!==" ") {
              ingredientes.push(value);
              console.log(ingredientes);
              i++;
            }
          }
          if (key === "strMeasure" + j) {
            if (value !== null && value !== "" && value!==" ") {
              cantidades.push(value);
              console.log(cantidades);
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
                <h1 className="platillo">{elem.strMeal}</h1>
                <div className="col">
                  <img src={elem.strMealThumb} alt={elem.strMeal} className="imagen_continst"></img>
                  <div className="">
                    <h2 className="preparacion">Ingredientes</h2>
                    {ingredientescompletos.map((ing) => {
                      return (
                        <div key={ing} className="listIngr">
                          <li>{ing}</li>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="prep">
                  <h2 className="preparacion">Preparation</h2>
                  <p className="prepa">{elem.strInstructions}</p>
                  {/* <h4>{contador}</h4> */}
                </div>
                <div className="button">
                <Link to="/home/Beef" className="botonCont">Back</Link>
                </div>
              </div>
            );
          })
        )}
      </main>
    </>
  );
};

export default Contenedorinstruccion;
