
/****************************************************************
 *       @AUTHOR: YONGQIAN HUANG, CREATED AT: 23/07/2020        *
 * @UPDATED: YONGQIAN HUANG, 23/07/2020, CREATION OF CAR MODEL  *
 * YONGQIAN HUANG, 23/07/2020, MIGRATION TO POSTGRESQL DATABASE
 * YONGQIAN HUANG   Updated in 03/09/2020 migrate to typescript *
 ****************************************************************/

import { Model, Table, AutoIncrement, Column, NotEmpty, BelongsTo, Default, ForeignKey, DataType } from "sequelize-typescript";
import Location from './location';
import { IdentityStore } from "aws-sdk";


export interface CarI{
    id?: number | null
    name: string
    brand: string
    model: string
    purchase_date: Date
    location_id: number
    seats: number
    luggages: number
    doors: number
    gear: string
    description: string
    addons: string
    viewed: number
    available: boolean
    price: number
}

@Table(
    {
        tableName: 'cars',
        timestamps: true
    }
)
export default class Car extends Model implements CarI{
    @NotEmpty
    @Column
    name!: string;

    @NotEmpty
    @Column
    brand!: string;

    @NotEmpty
    @Column
    model!: string;

    @Column
    purchase_date!: Date;

    @ForeignKey(() => Location)
    @Column
    location_id!: number;

    @BelongsTo(() => Location, {foreignKey: 'location_id', targetKey: 'id'})
    location!: Location;

    @Column
    seats!: number;

    @Column
    luggages!: number;

    @Column
    doors!: number;

    @Default('Automation')
    @Column
    gear!: string;

    @Column({
        type: DataType.TEXT
    })
    description!: string;

    @Column
    addons!: string;

    @Column
    viewed!: number;

    @Column
    available!: boolean;

    @Column({
        type: DataType.DOUBLE
    })
    price!: number
    
}

