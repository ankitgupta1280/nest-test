import { IsNotEmpty } from "class-validator"

export class CreateRoleDto{
    @IsNotEmpty()
    roleName: string
    @IsNotEmpty()
    update: boolean
    @IsNotEmpty()
    create: boolean
    @IsNotEmpty()
    delete: boolean
    @IsNotEmpty()
    fetch : boolean

}