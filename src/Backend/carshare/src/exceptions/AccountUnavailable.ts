/*************************************
 * @AUTHOR YONGQIAN HUANG 03/10/2020 *
 *  Validation user rent            *
 *************************************/

class AccountUnavailable extends Error{
    constructor(message: string) {
      super(message);
      // Set the prototype explicitly.
      Object.setPrototypeOf(this, AccountUnavailable.prototype);
    }
  }
  
  export default AccountUnavailable;