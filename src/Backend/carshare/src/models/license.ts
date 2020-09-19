/********************************************************
 *   @AUTHOR: YONGQIAN HUANG, CREATED AT: 02/08/2020    *
 ********************************************************/
    

import { Model, Table, Column, NotEmpty, Default, DataType, ForeignKey, BelongsTo, HasOne } from "sequelize-typescript";
import Customer from './customer';


export interface LicenseI{
  id?: number | null;
  user_id: number;
  isValidated: boolean;
}

@Table(
  {
    tableName: 'licenses',
    timestamps: true
  }
)
export default class License extends Model implements LicenseI {
  @ForeignKey(() => Customer)
  @Column
  user_id!: number

  @Default(false)
  @Column
  isValidated!: boolean; 
}