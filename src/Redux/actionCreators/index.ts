import * as actionTypes from '../actionTypes';
import { ICocktail, GetCockTailsAction } from '../types/drink';


export const getRandomCocktails = (cocktails: ICocktail[]): GetCockTailsAction => {
    return {
        type: actionTypes.GET_COCKTAILS,
        cocktails: cocktails
    }
}
