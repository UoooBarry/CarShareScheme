import { timeStamp } from "console";
/*
@Author Yongqian Huang 1/10/2020
*/

import { Model, Table, Column, NotEmpty, Default, ForeignKey, DataType, BelongsTo } from "sequelize-typescript";
import Car from "./car";
import Customer from './customer';

export interface CommentI{
    id?: number | null
    user_id: number
    car_id: number
    stars: number
    comment: string
}

@Table(
    {
        tableName: 'comments',
        timestamps: true
    }
)
export default class Comment extends Model implements CommentI{
    @NotEmpty
    @ForeignKey(() => Customer)
    @Column
    user_id!: number;

    @NotEmpty
    @ForeignKey(() => Car)
    @Column
    car_id!: number;

    @BelongsTo(() => Car, 'car_id')
    car!: Car;

    @BelongsTo(() => Customer, 'user_id')
    user!: Customer;

    @Default(0)
    @Column
    stars!: number;

    @Column({
        type: DataType.TEXT
    })
    comment!: string;
    
}