const axios = require("axios");

export const getGiHubUserWithAxios = () => {
  axios
    .get("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then((value) => {
      console.log(value);
    });
};

// Traigo Ingredientes
export const getIngredientes = () => {
  axios
    .get("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
    .then(function (response) {
      // handle success
      let dataReceta = response.data.meals[0];
      let ingredientes = [];
      let i = 1;
      let ingredientesFiltrados = [];

      for (const [key, value] of Object.entries(dataReceta)) {
        if (key === "strIngredient" + i) {
          ingredientes.push(value);
          i++;
        }
      }

      for (let j = 0; j < ingredientes.length; j++) {
        if (ingredientes[j] !== null || ingredientes.length === 0) {
          ingredientesFiltrados.push(ingredientes[j]);
        }
      }

      console.log(ingredientesFiltrados);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}

// Traigo categorias
export const getCategorias = () => {
  axios
    .get("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
    .then(function (response) {
      // handle success
      let listaCategorias = [];
      // let categorias = response.data.meals[0].strCategory;

      for (let i = 0; i < response.data.meals.length; i++) {
        listaCategorias.push(response.data.meals[i].strCategory);
      }
      console.log(listaCategorias);
      return listaCategorias;
      
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  
}

// Traigo instrucciones
export const getInstrucciones = () => {
  axios
    .get("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
    .then(function (response) {
      // handle success
      let dataReceta = response.data.meals[0];
      let instrucciones = "";

      for (const [key, value] of Object.entries(dataReceta)) {
        if (key === "strInstructions") {
          instrucciones = value;
        }
      }
      console.log(instrucciones);
      return instrucciones;

    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}

// Traigo thumbnail
export const traigoThumbnail = () => {
  axios
    .get("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
    .then(function (response) {
      // handle success
      let dataReceta = response.data.meals[0];
      let thumbnail = "";

      for (const [key, value] of Object.entries(dataReceta)) {
        if (key === "strMealThumb") {
          thumbnail = value;
        }
      }

      // console.log(thumbnail);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}

// Traigo plato
export const getPlato = () => {
  axios
    .get("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
    .then(function (response) {
      // handle success
      let dataReceta = response.data.meals[0];
      let plato = "";

      for (const [key, value] of Object.entries(dataReceta)) {
        if (key === "strMeal") {
          plato = value;
        }
      }

      //  console.log(plato);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}
