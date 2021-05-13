import {
  getRandomCocktails,
  getRandomSucessCocktails,
  searchCocktails,
  searchCocktailsSuccess,
  getRandomCocktailItemSuccess,
  getRandomCocktailItem,
  getDrinkDetail,
  getDrinkDetailSuccess,
  getPopularDrinks,
  getPopularDrinkSuccess, 
  addPopularDrinks
} from '../actionCreators/index';
import { Dispatch } from 'redux';
import CocktailService from '../../Services/services';
import PopularService from '../../Services/popularService'
import { ICocktail } from '../types/drink';

export const getCocktails = () => {
  return function (dispatch: Dispatch<any>) {
    dispatch(getRandomCocktails());
    CocktailService.getCocktailsService()
      .then(res => {
        dispatch(getRandomSucessCocktails(res.data.drinks.slice(5)))
      }).catch((error) => {
        console.log(error)
      })
  };
};


export const searchCocktailsEffect = (payload: string) => {
  return function (dispatch: Dispatch<any>) {
    dispatch(searchCocktails)
    CocktailService.searchCocktail(payload)
      .then(res => {
        dispatch(searchCocktailsSuccess(res.data.drinks.slice(5)))
      }).catch((error) => {
        console.log(error)
      })
  };
};

export const getRandomObjectEffect = () => {
  return function (dispatch: Dispatch<any>) {
    dispatch(getRandomCocktailItem());

    CocktailService.getRandomDrink()
      .then(res => {
        console.log(res.data)
        dispatch(getRandomCocktailItemSuccess(res.data.drinks))
      }).catch((error) => {
        console.log(error)
      })
  }
}


export const getCocktailDetailEffect = (payload: string) => {
  return function (dispatch: Dispatch<any>) {
    dispatch(getDrinkDetail());

    CocktailService.getDrinkDetail(payload)
      .then(res => {
        console.log(res.data.drinks[0])
        dispatch(getDrinkDetailSuccess(res.data.drinks[0]))
      }).catch((error) => {
        console.log(error)
      })
  }
}

export const getPopularPosts = () => {
  return function (dispatch: Dispatch<any>) {
    dispatch(getPopularDrinks());
    PopularService.getAll().orderByPriority().limitToLast(5).on("value", (snapshot) => {
      let pops: any[] = []
      snapshot.forEach(function (data) {
          pops.push(data.val())
      });
      dispatch(getPopularDrinkSuccess(pops))
    })
  }
}


export const addPopularPosts = (payload: ICocktail) => {
  return function (dispatch: Dispatch<any>) {
    PopularService.create(payload).on('child_added', (cocktail) => { 
        dispatch(addPopularDrinks(cocktail.val()))
    })
  }
}



