class ItemNotFound extends Error{
  constructor(message: string) {
    super(message);
    // Set the prototype explicitly.
    Object.setPrototypeOf(this, ItemNotFound.prototype);
  }
}

export default ItemNotFound;