import { BaseEntity } from "src/core/base.entity";
import { Column, Entity } from "typeorm";
import { ROLES } from "./constants/constant";

@Entity('role')
export class Role extends BaseEntity{
    @Column({unique: true})
    roleName: string

    @Column()
    update: boolean

    @Column()
    create: boolean

    @Column()
    delete: boolean

    @Column()
    fetch : boolean
}