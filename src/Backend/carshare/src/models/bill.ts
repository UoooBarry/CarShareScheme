
/********************************************************
 *   @AUTHOR: YONGQIAN HUANG, CREATED AT: 02/08/2020    *
 * @UPDATED: YONGQIAN HUANG, 02/08/2020, ADD BILL MODEL
 * YONGQIAN HUANG   Updated in 03/09/2020 migrate to typescrip
 *                                        Add bill type *
 ********************************************************/
    

import { Model, Table, Column, NotEmpty, Default, DataType, ForeignKey, BelongsTo, HasOne } from "sequelize-typescript";
import Customer from './customer';
import Rent from "./rent";

export enum BillType{
    RentFee = 'Rent fee',
    OverdueFee = 'Overdue fee'
}


export interface BillI{
    id?: number | null;
    user_id: number;
    rent_id: number;
    type: BillType;
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

    @ForeignKey(() => Rent)
    @Column
    rent_id!: number

    @BelongsTo(() => Rent)
    rent!: Rent
    
    @NotEmpty
    @Column
    type!: BillType

    @BelongsTo(() => Customer)
    user!: Customer

    @Default(false)
    @Column
    isPaid!: boolean
}