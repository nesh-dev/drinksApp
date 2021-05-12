import { getRandomCocktails, getRandomSucessCocktails} from '../actionCreators/index';
import { Dispatch } from 'redux';
import { ICocktail } from '../types/drink'
import CocktailService from '../../Services/services';

export const getCocktails = () => {
  

  return async function (dispatch: Dispatch<any>) {
    dispatch(getRandomCocktails());
    CocktailService.getCocktailsService()
    .then(res => {
      dispatch(getRandomSucessCocktails(res.data.drinks))
    }).catch((error) => {
      console.log(error)
    })
  };
};

const getManyCocktailsHelper = async () => {
  let randomCocktails: ICocktail[] | undefined = []
  for (let i = 0; i < 5; i++) {
    CocktailService.getCocktailsService()
      .then(res => {
        randomCocktails?.push(res.data.drinks[0])
      }).catch((error) => {
        console.log(error)
      })
  }

  return randomCocktails


}
