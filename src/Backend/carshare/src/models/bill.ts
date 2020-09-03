
/********************************************************
 *   @AUTHOR: YONGQIAN HUANG, CREATED AT: 02/08/2020    *
 * @UPDATED: YONGQIAN HUANG, 02/08/2020, ADD BILL MODEL
 * YONGQIAN HUANG   Updated in 03/09/2020 migrate to typescrip *
 ********************************************************/
    

import { Model, Table, Column, NotEmpty, Default, DataType } from "sequelize-typescript";

export interface BillI{
    id?: number | null,
    fee: number,
    completed: boolean
}

@Table(
    {
        tableName: 'bills',
        timestamps: true
    }
)
export default class Bill extends Model implements BillI{
    @NotEmpty
    @Column({
        type: DataType.DOUBLE
    })
    fee!: number


    @Default(false)
    @Column
    completed!: boolean
}