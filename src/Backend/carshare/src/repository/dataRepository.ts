/*************************************
 * @AUTHOR YONGQIAN HUANG 15/09/2020 *
 *************************************/

interface dataRepository{
  instance?: dataRepository;
  create(object: any): void,
  getAll(): any,
  get(id: number): any
}

export default dataRepository;