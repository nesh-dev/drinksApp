import {
    GetCocktailType,
    GetCockTailsAction
  } from '../types/drink';
  import {
      GET_RANDOM_COCKTAIL_ITEM, GET_RANDOM_COCKTAIL_ITEM_SUCCESS, GET_RANDOM_COCKTAIL_ITEM_FAILURE
  } from '../actionTypes/index'
  
  const initialStateGetCocktails: GetCocktailType = {
    loading: false,
    error: '',
    cocktails: []
  };
  
  export const getCocktailItemReducer = (
    state = initialStateGetCocktails,
    action: GetCockTailsAction
  ): GetCocktailType => {
    switch (action.type) {
      case GET_RANDOM_COCKTAIL_ITEM:
        return {
          ...state,
          loading: true
        };
      case GET_RANDOM_COCKTAIL_ITEM_SUCCESS: 
        return { 
          ...state,
          loading: false,
          cocktails: action.cocktails
        }
      default:
        return state;
    }
  };
  