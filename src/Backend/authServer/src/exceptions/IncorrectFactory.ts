/*************************************
 * @AUTHOR YONGQIAN HUANG 28/09/2020 *
 *  Apply factory pattern            *
 *************************************/

class IncorrectFactory extends Error{
  constructor(message: string) {
    super(message);
    // Set the prototype explicitly.
    Object.setPrototypeOf(this, IncorrectFactory.prototype);
  }
}

export default IncorrectFactory;