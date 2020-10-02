/****************************************************************
 *       @AUTHOR: YONGQIAN HUANG, CREATED AT: 23/07/2020        *
 * @UPDATED: YONGQIAN HUANG, 23/07/2020, CREATION OF RENT MODEL *
 *        YONGQIAN HUANG, 30/07/2020, CREATE BILL MODEL         *
 *  YONGQIAN HUANG   Updated in 03/09/2020 migrate to typescript *
 ****************************************************************/


import { Model, Table, AutoIncrement, PrimaryKey, Column, AllowNull, NotEmpty, BelongsTo, Default, ForeignKey } from "sequelize-typescript";
import Location from './location';
import Car from './car';
import Customer from './customer';
import Bill from './bill';

export enum RentStatus{
    NotPicked = 'Not picked',
    InProgress = 'In progress',
    Completed = 'Completed',
    WaitForReview = 'Wait for review',
    Extended = 'Extended',
    Overdue = 'Overdue'
}

export interface RentI{
    id?: number | null;
    car_id: number;
    user_id: number;
    period: number;
    start_from: Date;
    bill_id: number;
    status: RentStatus
}

@Table(
    {
        tableName: 'rents',
        timestamps: true
    }
)
export default class Rent extends Model implements RentI{
    @NotEmpty
    @ForeignKey(() => Customer)
    @Column
    user_id!: number;

    @BelongsTo(() => Customer, 'user_id')
    user!: Customer;

    @NotEmpty
    @ForeignKey(() => Car)
    @Column
    car_id!: number

    @BelongsTo(() => Car, 'car_id')
    car!: Car

    @NotEmpty
    @Column
    start_from!: Date

    @NotEmpty
    @Column
    period!: number

    @NotEmpty
    @ForeignKey(() => Bill)
    @Column
    bill_id!: number

    @BelongsTo(() => Bill, 'bill_id')
    bill!: Bill

    @Default(RentStatus.NotPicked)
    @Column
    status!: RentStatus
}
