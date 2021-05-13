import axios from 'axios';
const baseUrl = process.env.REACT_APP_URL
const API_KEY = process.env.REACT_APP_COCKTAIL_API_KEY

class CocktailService { 
    static getCocktailsService(){ 
        return axios.get(`${baseUrl}/${API_KEY}/randomselection.php`)
    }

    static searchCocktail(searchParam: string){ 
        return axios.get(`${baseUrl}/${API_KEY}/search.php?s=${searchParam}`)
    }

    static getRandomDrink(){ 
        return axios.get(`${baseUrl}/${API_KEY}/random.php`)
    }

    static getDrinkDetail(drinkId: string){ 
        return axios.get(`${baseUrl}/${API_KEY}/lookup.php?i=${drinkId}`)
    }

}
export default CocktailService;
