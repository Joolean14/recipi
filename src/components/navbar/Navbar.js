import './Navbar.css';
import React, {useEffect, useState} from 'react';
// import { getGiHubUserWithAxios } from '../../helpers';
import axios from 'axios';

function Navbar(){
    const [categories, setCategories] = useState();
    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/categories.php").then((value) => {
            Object.keys(value.data).forEach((cat)=>{
                value.data[cat].forEach((nombre)=>{
                    if (nombre.idCategory==='1'){
                        setCategories(nombre.strCategory);
                    }
                })
            });
        });
    }, [])
    return(
        <nav className="header" id="header">
            {/* <Link to="">
                <img className="logoHeader" id="logoHeader" alt="logo" src="/trainbook.jpg"></img>
            </Link> */}
            {/* <div className="language" id="language" alt="language">
                <ul>
                    <li><a href="/home">EN</a></li>
                    <li><a href="/eshome">ES</a></li>
                </ul>
            </div>
            <div className="header_search" id="header_search">
                <input className="headerSearchInput" type="text" id="headerSearchInput" placeholder="Search"/>
                <SearchIcon className="searchIcon"/>
            </div> */}
            <div className="menu" id="menu" alt="menu">
                <ul>
                    <li><a href={`/${categories}`}>{categories}</a></li>
                    <li><a href="/">Desert</a></li>
                    <li><a href="/">Miscellaneus</a></li>
                    <li><a href="/">Pasta</a></li>
                    <li><a href="/">Side</a></li>
                    <li><a href="/">Starter</a></li>
                    <li><a href="/">Vegetarian</a></li>
                </ul>
            </div>
        </nav>
    );
}
  
  export default Navbar;