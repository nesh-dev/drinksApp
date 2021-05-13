import { combineReducers } from 'redux';
import  { getCocktailReducer } from "./cocktailReducers"; 
import { searchCocktailReducer } from "./searchReducer"
import { getCocktailItemReducer} from "./randomCocktail"

const rootReducer = combineReducers({
    getCocktailReducer, 
    searchCocktailReducer, 
    getCocktailItemReducer
});

export default rootReducer;
