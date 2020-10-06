/********************************************************
 *   @AUTHOR: YONGQIAN HUANG, CREATED AT: 02/08/2020    *
 ********************************************************/
    

import { Model, Table, Column, NotEmpty, Default, Unique, ForeignKey, BelongsTo, HasOne } from "sequelize-typescript";
import Customer from './customer';


export interface LicenseI{
  id?: number | null;
  user_id: number;
  uploadedImage: number;
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
  @Unique
  @Column
  user_id!: number

  @Default(0)
  @Column
  uploadedImage!: number;

  @Default(false)
  @Column
  isValidated!: boolean;

  @BelongsTo(() => Customer)
  user!: Customer
}