 
/********************************************************************
 *         @AUTHOR: YONGQIAN HUANG, CREATED AT: 23/07/2020          *
 * @UPDATED: YONGQIAN HUANG, 23/07/2020, CREATION OF LOCATION MODEL 
 *   YONGQIAN HUANG   Updated in 03/09/2020 migrate to typescript **
 ********************************************************************/


import { Model, Table, AutoIncrement, PrimaryKey, Column, AllowNull, NotEmpty, BelongsTo, HasOne, HasMany, ForeignKey } from "sequelize-typescript";

export interface LocationI{
    id?: number | null;
    name: string;
    address: string;
}

@Table(
    {
        tableName: 'locations',
        timestamps: true
    }
)
export default class Location extends Model implements LocationI{
    @NotEmpty
    @Column
    name!: string;

    @NotEmpty
    @Column
    address!: string;
}