import * as actionTypes from '../actionTypes';
import { ICocktail, GetCockTailsAction } from '../types/drink';


export const getRandomSucessCocktails = (cocktails: ICocktail[] | undefined): GetCockTailsAction => {
    return {
        type: actionTypes.GET_COCKTAIL_SUCCESS,
        cocktails: cocktails
    }
}

export const getRandomCocktails = (): GetCockTailsAction => {
    return { 
        type: actionTypes.GET_COCKTAIL_SUCCESS,
        cocktails: []
    }
}
