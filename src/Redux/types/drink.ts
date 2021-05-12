export interface ICocktail { 
    idDrink: string
    strDrink: string
    strAlcoholic: string
    strDrinkThumb: string
}


export type GetCocktailType = { 
    cocktails: ICocktail[]
    loading?: boolean
    error?: string
}

export type GetCockTailsAction = { 
    type: string
    cocktails: ICocktail[]
}

export type AddCockTailAction = { 
    type: string
    cocktail: ICocktail
}

export type DispatchType =( args: GetCockTailsAction) => GetCockTailsAction
