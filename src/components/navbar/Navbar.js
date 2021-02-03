import "./Navbar.css";
import React, { useLayoutEffect, useState } from "react";
// import { getCategorias, getInstrucciones } from "./../../helpers";
import axios from "axios";
import { getCategorias } from "../../helpers";

// import { Link } from 'react-router-dom';

const Navbar = (props) => {
  // arrow function
  const [state, setstate] = useState();
  // console.log(state);

  useLayoutEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
      .then(function (response) {
        // handle success
        let dataReceta = response.data.meals[0];
        let instrucciones = [];

        for (let i = 0; i < response.data.meals.length; i++) {
          instrucciones.push(response.data.meals[i].strCategory);
        }
        setstate(instrucciones);
        console.log(state);
        console.log(instrucciones);
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
              return (<li key={elem}>{ elem }  </li>);
          })
          )})
        </ul>
        {/* <p>{state[0]}</p> */}
      </div>
    </nav>
  );
};

export default Navbar;

// Como mostrar las getCategorias
// useRef useLayoutEffect useState
