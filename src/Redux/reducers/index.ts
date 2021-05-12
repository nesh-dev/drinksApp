import { combineReducers } from 'redux';
import  { getCocktailReducer } from "./cocktailReducers"

const rootReducer = combineReducers({
    getCocktailReducer
});

export default rootReducer;
