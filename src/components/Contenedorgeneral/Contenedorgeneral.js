import React, { useLayoutEffect, useState } from "react";
import axios from "axios";
// import { getCategorias, getThumbnail, getPlato } from "../../helpers";

const Contenedorgeneral = () => {
  const [thumbnail, setThumbnail] = useState();
  const [plato, setPlato] = useState();

  useLayoutEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then(function (response) {
        // handle success
        let dataReceta = response.data.meals;
        setPlato(dataReceta);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <main>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {plato === undefined ? (
                <div>Cargando datos...</div>
              ) : (
                plato.map((elem) => {
                  return (
                    <div key={elem.strMeal} className="card shadow-sm">
                      {/* <svg
                        className="bd-placeholder-img card-img-top"
                        width="100%"
                        height="225"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        aria-label="Placeholder: Thumbnail"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                      >
                      </svg> */}
                        <img src={elem.strMealThumb}></img>
                      <div className="card-body">
                        <p className="card-text">{elem.strMeal}</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
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
            <div className="col">
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contenedorgeneral;
