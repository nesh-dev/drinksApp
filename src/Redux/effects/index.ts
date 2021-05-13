import {
  getRandomCocktails,
  getRandomSucessCocktails,
  searchCocktails,
  searchCocktailsSuccess,
  getRandomCocktailItemSuccess,
  getRandomCocktailItem,
  getDrinkDetail,
  getDrinkDetailSuccess,
} from '../actionCreators/index';
import { Dispatch } from 'redux';
import CocktailService from '../../Services/services';

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
        console.log(res.data)
        dispatch(getDrinkDetailSuccess(res.data.drinks[0]))
      }).catch((error) => {
        console.log(error)
      })
  }
}



