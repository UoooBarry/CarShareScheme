/*************************************
 * @AUTHOR YONGQIAN HUANG 28/09/2020 *
 *  Apply factory pattern            *
 *************************************/

import Validator from "../validators/Validator";
import MobileValidator from '../validators/MobileValidator'
import RegisterValidator from "../validators/RegisterValidator";
import IncorrectFactory from "../exceptions/IncorrectFactory";

class RepositoryFactory{
  instance?: RepositoryFactory | undefined;
  private static instance?: RepositoryFactory;

  private constructor() {
    
  }

  getValidator(type: string): Validator {
    switch (type) {
      case "mobile": {
        return MobileValidator;  
      }
      case "register": {
        return RegisterValidator;
      }
      default: {
        throw new IncorrectFactory('Incorrect input for repository');
      }
    }
  }

  static getInstance(): RepositoryFactory{
    if (!RepositoryFactory.instance) 
      RepositoryFactory.instance = new RepositoryFactory()
    
    return RepositoryFactory.instance;
  }
}

export default RepositoryFactory.getInstance();