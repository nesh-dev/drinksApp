import firebase from '../firebase'; 
import { ICocktail } from '../Redux/types/drink';

const db = firebase.database()
const cocktailsRef = db.ref('cockails')

class PopularService { 
  static getAll() {
      return cocktailsRef;
    }
    
    static create(cocktail: ICocktail) {
      return cocktailsRef.push(cocktail);
    }

}

export default PopularService;
