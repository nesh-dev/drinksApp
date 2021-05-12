import axios from 'axios';
const baseUrl = process.env.REACT_APP_URL

class CocktailService { 
    static getCocktailsService(){ 
        console.log('got called')
        return axios.get(`${baseUrl}/random.php`)
    }

}
export default CocktailService;
