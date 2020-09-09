 
/*****************************************************************
 *        @AUTHOR: YONGQIAN HUANG, CREATED AT: 23/07/2020        *
 * @UPDATED: YONGQIAN HUANG, 23/07/2020, CREATION OF LOGIN MODEL *
 *****************************************************************/


import { Model, Table, AutoIncrement, PrimaryKey, Column, AllowNull, NotEmpty, BelongsTo, Unique, Default, ForeignKey } from "sequelize-typescript";
import Customer from './customer';

export interface LoginI{
    id?: number | null;
    Email: string;
    password: string;
    user_id: number;
    activate: boolean;
}

//scheme
@Table(
    {
        tableName: 'logins',
        timestamps: true
    }
)
export default class Login extends Model implements LoginI{
    @PrimaryKey
    @AllowNull(false)
    @Column
    Email!: string;

    @NotEmpty
    @Column
    password!: string;

    @ForeignKey(()=> Customer)
    @Column
    user_id!: number;

    @BelongsTo(()=> Customer, {foreignKey: 'user_id'})
    user!: Customer

    @Default(true)
    @Column
    activate!: boolean;
}