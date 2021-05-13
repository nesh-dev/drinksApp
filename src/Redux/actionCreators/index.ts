import { type } from 'os';
import * as actionTypes from '../actionTypes';
import { ICocktail, GetCockTailsAction, SearchCocktailAction, GetCockTailDetailAction } from '../types/drink';


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

export const getRandomCocktailItem = (): GetCockTailsAction => { 
    return { 
        type: actionTypes.GET_RANDOM_COCKTAIL_ITEM,
        cocktails: []
    }
}

export const getRandomCocktailItemSuccess= (cocktails: ICocktail[] ): GetCockTailsAction => { 
    return { 
        type: actionTypes.GET_RANDOM_COCKTAIL_ITEM_SUCCESS,
        cocktails: cocktails
    }
}

export const getRandomCocktailItemFailure= (cocktails: ICocktail[] ): GetCockTailsAction => { 
    return { 
        type: actionTypes.GET_RANDOM_COCKTAIL_ITEM_FAILURE,
        cocktails: cocktails
    }
}

export const searchCocktails = (): SearchCocktailAction =>  { 
    return { 
        type: actionTypes.SEARCH_COCKTAILS, 
        cocktails: []
    }
}


export const searchCocktailsSuccess = (cocktails: ICocktail[]): SearchCocktailAction =>  { 
    return { 
        type: actionTypes.SEARCH_COCKTAILS_SUCCESS, 
        cocktails: cocktails
    }
}

export const getDrinkDetail = ():GetCockTailDetailAction => { 
    return { 
        type: actionTypes.GET_DRINK_DETAIL, 
    }
}

export const getDrinkDetailSuccess = (cocktail: ICocktail) =>  { 
    return { 
        type: actionTypes.GET_DRINK_DETAIL_SUCCESS, 
        cocktail: cocktail

    }
}

export const getPopularDrinks = () => { 
    return { 
        type: actionTypes.GET_POPULAR_DRINKS,
        cocktail: []
    }
}

export const getPopularDrinkSuccess= (cocktails: ICocktail[]) => { 
    return { 
        type: actionTypes.GET_POPULAR_DRINKS_SUCCESS,
        cocktails: cocktails
    }
}

export const addPopularDrinks = (cocktail: ICocktail) => { 
    return {
        type: actionTypes.ADD_COCKTAIL, 
        cocktail: cocktail
    }
}
