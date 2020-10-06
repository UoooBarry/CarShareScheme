/*************************************
 * @AUTHOR YONGQIAN HUANG 20/09/2020 *
 *  Apply custom exception            *
 *************************************/

class IncorrectItem extends Error{
  constructor(message: string) {
    super(message);
    // Set the prototype explicitly.
    Object.setPrototypeOf(this, IncorrectItem.prototype);
  }
}

export default IncorrectItem;