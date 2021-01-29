import axios from 'axios';

export const getGiHubUserWithAxios = async () => {
    let result;
    axios.get("https://www.themealdb.com/api/json/v1/1/categories.php").then((value) => {
        result=value.data    
        return result;
        // console.log(value.data);
        });
};
