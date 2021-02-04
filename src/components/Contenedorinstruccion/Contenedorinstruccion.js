import React, { useLayoutEffect, useState } from "react";
import {useHistory, useParams} from "react-router-dom";
import axios from "axios";
import "./Contenedorinstruccion.css"
import Navbar from "../navbar/Navbar";
const Contenedorinstruccion = () => {
  const [plato, setPlato] = useState();
  const [ingredientescompletos, setIngredientes]=useState();
  let { plat } = useParams();
  useLayoutEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${plat}`)
      .then(function (response) {
        // handle success
        let dataReceta = response.data.meals;
        let ingredientes = [];
        let i = 1;
        let ingredientesFiltrados = [];

         for (const [key, value] of Object.entries(dataReceta)) {
            if (key === "strIngredient" + i) {
                console.log(value)
              ingredientes.push(value);
              i++;
            }
        }

        // for (let j = 0; j < ingredientes.length; j++) {
        //  if (ingredientes[j] !== null || ingredientes[j] !== "") {
        //       ingredientesFiltrados.push(ingredientes[j]);
        //     }
        // }
        console.log(ingredientes)
        setIngredientes(ingredientes);
        setPlato(dataReceta);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [plat]);
//   const history =useHistory();
  
  // const  HomeButton = (id) => {
  //   const history = useHistory();
  
//   const handleClick = (plat) => {
//     history.push(`/home/${id}/${plat}`);
//   }
  
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
                        {ingredientescompletos===undefined?(<p>Working</p>):(
                            ingredientescompletos.map((ingrediente)=>{
                                return (<p>{ingrediente}</p>
                                )
                            })
                        )
                        }
                    </div>
                    // <div key={elem.strMeal} className="card shadow-sm">
                    //   <img src= {elem.strMealThumb} className="imagen" alt={elem.strMeal}/>
                    //   <div className="card-body">
                    //     <p className="card-text">{elem.strMeal}</p>
                    //     <div className="d-flex justify-content-between align-items-center">
                    //       <div className="btn-group">
                    //         <button
                    //           type="button"
                    //           className="btn btn-sm btn-outline-secondary"
                    //           onClick={()=>{handleClick(elem.idMeal)}}
                    //         >
                    //           View
                    //         </button>
                    //       </div>
                    //     </div>
                    //   </div>
                    // </div>
                  );
                })
              )}
      {/* <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" >
              {plato === undefined ? (
                <div>Cargando datos...</div>
              ) : (
                plato.map((elem) => {
                  return (
                    <div key={elem.strMeal} className="card shadow-sm">
                      <img src= {elem.strMealThumb} className="imagen" alt={elem.strMeal}/>
                      <div className="card-body">
                        <p className="card-text">{elem.strMeal}</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                              onClick={()=>{handleClick(elem.idMeal)}}
                            >
                              View
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
          </div>
        </div>
      </div> */}
    </main>
    </>
  );
};

export default Contenedorinstruccion;