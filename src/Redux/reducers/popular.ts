import {
    GetCocktailType,
    GetCockTailsAction
  } from '../types/drink';
  import {
    GET_POPULAR_DRINKS, GET_POPULAR_DRINKS_FAILURE, GET_POPULAR_DRINKS_SUCCESS, 
    ADD_COCKTAIL
  } from '../actionTypes/index'
  
  const initialStateGetCocktails: GetCocktailType = {
    loading: false,
    error: '',
    cocktails: [],
    cocktail: {}
  };
  
  export const getPopularReducer = (
    state = initialStateGetCocktails,
    action: GetCockTailsAction
  ): GetCocktailType => {
    switch (action.type) {
      case GET_POPULAR_DRINKS:
        return {
          ...state,
          loading: true
        };
      case GET_POPULAR_DRINKS_SUCCESS: 
        return { 
          ...state,
          loading: false,
          cocktails: action.cocktails
        }
      case ADD_COCKTAIL: 
        return { 
          ...state, 
          loading: false, 
          cocktail: action.cocktail
        }
      default:
        return state;
    }
  };
  