/*************************************
 * @AUTHOR YONGQIAN HUANG 28/09/2020 *
 *  Apply factory pattern            *
 *************************************/

import Validator from "../validators/Validator";
import CarValidator from "../validators/CarValidator";
import ExtendRentValidator from "../validators/ExtendRentValidator";
import OrderValidator from "../validators/OrderValidator";
import PaymentValidator from "../validators/PaymentValidator";
import ProfileValidator from "../validators/ProfileValidator";
import NoRepository from "../exceptions/IncorrectFactory";
import IncorrectFactory from "../exceptions/IncorrectFactory";

class RepositoryFactory{
  instance?: RepositoryFactory | undefined;
  private static instance?: RepositoryFactory;

  private constructor() {
    
  }

  getValidator(type: string): Validator {
    switch (type) {
      case "car": {
        return CarValidator;  
      }
      case "extend": {
        return ExtendRentValidator;
      }
      case "order": {
        return OrderValidator;
      }
      case "payment": {
        return PaymentValidator;
      }
      case "profile": {
        return ProfileValidator;
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