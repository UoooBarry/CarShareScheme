
/********************************************************
 *   @AUTHOR: YONGQIAN HUANG, CREATED AT: 02/08/2020    *
 * @UPDATED: YONGQIAN HUANG, 02/08/2020, ADD BILL MODEL *
 ********************************************************/
    

import { Model, Table, AutoIncrement, PrimaryKey, Column, NotEmpty } from "sequelize-typescript";

export interface BillI{
    fee: number
}

@Table(
    {
        tableName: 'bills',
        timestamps: true
    }
)
export default class Bill extends Model implements BillI{
    @NotEmpty
    @Column
    fee!: number
}