import { timeStamp } from "console";
/*
@Author Yongqian Huang 1/10/2020
*/

import { Model, Table, Column, NotEmpty, Default, ForeignKey, DataType, BelongsTo } from "sequelize-typescript";
import { TableHints } from "sequelize/types";
import User from './customer';

export interface CommentI{
    id?: number | null
    user_id: number
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
    @BelongsTo(() => User)
    @Column
    user_id!: number;

    @BelongsTo(() => User, {foreignKey: 'user_id', targetKey: 'id'})
    user!: User;

    @Default(0)
    @Column
    stars!: number;

    @Column({
        type: DataType.TEXT
    })
    comment!: string;
    
}