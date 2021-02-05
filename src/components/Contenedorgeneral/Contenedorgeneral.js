import React, { useLayoutEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import "./Contenedorgeneral.css";
import Navbar from "../navbar/Navbar";
const Contenedorgeneral = () => {
  const [plato, setPlato] = useState();
  let { id } = useParams();
  useLayoutEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`)
      .then(function (response) {
        // handle success
        let dataReceta = response.data.meals;
        setPlato(dataReceta);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [id]);
  const history = useHistory();


  const handleClick = (plat) => {
    history.push(`/home/${id}/${plat}`);
  };

  return (
    <>
      <Navbar />
      <main className="topnavbar">
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {plato === undefined ? (
                <div>Cargando datos...</div>
              ) : (
                plato.map((elem) => {
                  return (
                    <div key={elem.strMeal} className="card shadow-sm">
                      <img
                        src={elem.strMealThumb}
                        className="imagen"
                        alt={elem.strMeal}
                      />
                      <div className="card-body">
                        <p className="card-text">{elem.strMeal}</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                              onClick={() => {
                                handleClick(elem.idMeal);
                              }}
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
        </div>
      </main>
    </>
  );
};

export default Contenedorgeneral;
