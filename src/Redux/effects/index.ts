import { getRandomCocktails } from '../actionCreators/index';
import { Dispatch } from 'redux';
import CocktailService from '../../Services/services'; 

export const getCocktails = () => {
  return function (dispatch: Dispatch<any>) {
    CocktailService.getCocktailsService()
      .then(res => {
        console.warn(res, '>>>>')
        dispatch(getRandomCocktails(res.data));
        return res.data
      }).catch((error) => { 
          console.log(error)
      })
  };
};
