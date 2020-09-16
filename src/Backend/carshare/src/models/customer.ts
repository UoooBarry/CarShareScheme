
/********************************************************************
 *         @AUTHOR: YONGQIAN HUANG, CREATED AT: 23/07/2020          *
 * @UPDATED: YONGQIAN HUANG, 23/07/2020, CREATION OF CUSTOMER MODEL *
 *     YONGQIAN HUANG   Updated in 03/09/2020 migrate to typescript *
 ********************************************************************/



import { Model, Table, AutoIncrement, PrimaryKey, Column, AllowNull, NotEmpty, BelongsTo, Unique, Default, DataType} from "sequelize-typescript";

export interface customerI{
    id?: number | null;
    first_name: string;
    family_name: string;
    date_of_birth?: Date | null;
    contact_number: number;
    gender: string;
    admin: boolean;
}

@Table(
    {
        tableName: 'customers',
        timestamps: true
    }
)
export default class Customer extends Model implements customerI{
    @NotEmpty
    @Column
    first_name!: string;

    @NotEmpty
    @Column
    family_name!: string;

    @Column('Date')
    date_of_birth?: Date;

    @NotEmpty
    @Unique
    @Column
    contact_number!: number;

    @Column
    gender!: string;

    @Default(false)
    @Column
    admin!: boolean;
    
}