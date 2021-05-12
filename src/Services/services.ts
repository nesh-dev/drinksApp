import axios from 'axios';
const baseUrl = process.env.REACT_APP_URL
const API_KEY = process.env.REACT_APP_COCKTAIL_API_KEY

class CocktailService { 
    static getCocktailsService(){ 
        console.log('got called')
        return axios.get(`${baseUrl}/${API_KEY}/randomselection.php`)
    }

}
export default CocktailService;
