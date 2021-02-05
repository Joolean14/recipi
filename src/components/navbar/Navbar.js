import "./Navbar.css";
import React, { useLayoutEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Navbar = (props) => {
  // arrow function
  const [state, setstate] = useState();
  const history = useHistory();
  const handleClick = (id) => {
    history.push(`/home/${id}`);
  };
  useLayoutEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
      .then(function (response) {
        // handle success
        let instrucciones = [];

        for (let i = 0; i < response.data.meals.length; i++) {
          instrucciones.push(response.data.meals[i].strCategory);
        }
        setstate(instrucciones);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <nav className="header" id="header">
      <div className="menu" id="menu" alt="menu">
        <ul>
          {state === undefined ? (
            <li></li>
          ) : (
            state.map((elem) => {
              return (
                <li key={elem}>
                  <button
                    className="boton"
                    onClick={() => {
                      handleClick(elem);
                    }}
                  >
                    {elem}
                  </button>{" "}
                </li>
              );
            })
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
