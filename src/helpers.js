const axios = require('axios');



export const getGiHubUserWithAxios = () => {
    axios.get("https://www.themealdb.com/api/json/v1/1/categories.php").then((value) => {
        console.log(value);
        })
};


  


