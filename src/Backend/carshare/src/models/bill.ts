
/********************************************************
 *   @AUTHOR: YONGQIAN HUANG, CREATED AT: 02/08/2020    *
 * @UPDATED: YONGQIAN HUANG, 02/08/2020, ADD BILL MODEL
 * YONGQIAN HUANG   Updated in 03/09/2020 migrate to typescrip *
 ********************************************************/
    

import { Model, Table, Column, NotEmpty, Default, DataType, ForeignKey, BelongsTo, HasOne } from "sequelize-typescript";
import Customer from './customer';
import Rent from "./rent";

export enum BillType{
    RentFee = 'Rent fee',
    OverdueFee = 'Overdue fee',
}


export interface BillI{
    id?: number | null;
    user_id: number;
    type: string;
    fee: number;
    isPaid: boolean;
    rent: Rent;
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

    @ForeignKey(() => Customer)
    @Column
    user_id!: number
    
    @NotEmpty
    @Column
    type!: string

    @BelongsTo(() => Customer)
    user!: Customer

    @HasOne(() => Rent)
    rent!: Rent

    @Default(false)
    @Column
    isPaid!: boolean
}