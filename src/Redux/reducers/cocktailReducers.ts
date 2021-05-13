import {
  GetCocktailType,
  GetCockTailsAction
} from '../types/drink';
import {
  GET_COCKTAILS, GET_COCKTAIL_FAILURE, GET_COCKTAIL_SUCCESS, 
} from '../actionTypes/index'

const initialStateGetCocktails: GetCocktailType = {
  loading: false,
  error: '',
  cocktails: []
};

export const getCocktailReducer = (
  state = initialStateGetCocktails,
  action: GetCockTailsAction
): GetCocktailType => {
  switch (action.type) {
    case GET_COCKTAILS:
      return {
        ...state,
        loading: true
      };
    case GET_COCKTAIL_SUCCESS: 
      return { 
        ...state,
        loading: false,
        cocktails: action.cocktails
      }
    default:
      return state;
  }
};
