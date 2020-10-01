import { timeStamp } from "console";
/*
@Author Yongqian Huang 1/10/2020
*/

import { Model, Table, Column, NotEmpty, Default, ForeignKey, DataType, BelongsTo } from "sequelize-typescript";
import Customer from './customer';
import Rent from "./rent";

export interface CommentI{
    id?: number | null
    user_id: number
    rent: Rent
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
    @ForeignKey(() => Rent)
    @Column
    rent_id!: number;

    @BelongsTo(() => Rent, 'rent_id')
    rent!: Rent;

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