import { combineReducers } from 'redux';
import  { getCocktailReducer } from "./cocktailReducers"; 
import { searchCocktailReducer } from "./searchReducer"
import { getCocktailItemReducer} from "./randomCocktail"
import { getCocktailDetailReducer } from './cockTailDetail';
import { getPopularReducer } from './popular'

const rootReducer = combineReducers({
    getCocktailReducer, 
    searchCocktailReducer, 
    getCocktailItemReducer, 
    getCocktailDetailReducer, 
    getPopularReducer
});

export default rootReducer;
