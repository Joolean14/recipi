import "./Navbar.css";
import React, { useLayoutEffect, useState } from "react";
// import { getCategorias, getInstrucciones } from "./../../helpers";
import axios from "axios";

// import { Link } from 'react-router-dom';

function Navbar(props) {
  const [state, setstate] = useState();
//   console.log(state);

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
          console.log(instrucciones);
        setstate(instrucciones);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <nav className="header" id="header">
      {/* <Link to="">
                <img className="logoHeader" id="logoHeader" alt="logo" src="/trainbook.jpg"></img>
            </Link> */}
      {/* <div className="language" id="language" alt="language">
                <ul>
                    <li><a href="/home">EN</a></li>
                    <li><a href="/e2shome">ES</a></li>
                </ul>
            </div>
            <div className="header_search" id="header_search">
                <input className="headerSearchInput" type="text" id="headerSearchInput" placeholder="Search"/>
                <SearchIcon className="searchIcon"/>
            </div> */}
      <div className="menu" id="menu" alt="menu">
              <ul>
                 
                  {/* {state.forEach((elem) => {
                      <li>{elem}</li>
                   })} */}

          {/* <li><a href="/">Desert</a></li>
                    <li><a href="/">Miscellaneus</a></li>
                    <li><a href="/">Pasta</a></li>
                    <li><a href="/">Side</a></li>
                    <li><a href="/">Starter</a></li>
                <li><a href="/">Vegetarian</a></li> */}
        </ul>
        <p>{state}</p>
      </div>
    </nav>
  );
}

export default Navbar;
