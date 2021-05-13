import {
    GetCockTailDetailType,
    GetCockTailDetailAction
} from '../types/drink';
import {
    GET_DRINK_DETAIL_SUCCESS, GET_DRINK_DETAIL
} from '../actionTypes/index'

const initialStateGetCocktails: GetCockTailDetailType = {
    loading: false,
    error: '',
    cocktail: {
        idDrink: '',
        strDrink: '',
        strAlcoholic: '',
        strDrinkThumb: ''
    }
};

export const getCocktailDetailReducer = (
    state = initialStateGetCocktails,
    action: GetCockTailDetailAction
): GetCockTailDetailType => {
    switch (action.type) {
        case GET_DRINK_DETAIL:
            return {
                ...state,
                loading: true
            };
        case GET_DRINK_DETAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                cocktail: action.cocktail
            }
        default:
            return state;
    }
};
