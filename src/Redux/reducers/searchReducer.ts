import {
    GetCocktailType,
    SearchCocktailAction
  } from '../types/drink';
  import {
   SEARCH_COCKTAILS_SUCCESS, SEARCH_COCKTAILS, SEARCH_COCKTAILS_FAILURE
  } from '../actionTypes/index'
  
  const initialStateGetCocktails: GetCocktailType = {
    loading: false,
    error: '',
    cocktails: []
  };
  
  export const searchCocktailReducer = (
    state = initialStateGetCocktails,
    action: SearchCocktailAction
  ): GetCocktailType => {
    switch (action.type) {
      case SEARCH_COCKTAILS:
        return {
          ...state,
          loading: true
        };
      case SEARCH_COCKTAILS_SUCCESS: 
        return { 
          ...state,
          loading: false,
          cocktails: action.cocktails
        }
      default:
        return state;
    }
  };
  