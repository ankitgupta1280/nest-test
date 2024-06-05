import { BaseEntity } from "src/core/base.entity";
import { ROLES } from "src/roles/constants/constant";
import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";


@Entity('user')
export class User extends BaseEntity{
    @Column({unique: true})
    username: string

    @Column()
    password: string

    @Column()
    role: ROLES
}