import { IsNotEmpty, IsUUID } from "class-validator"

export class UpdateRoleDto{
    @IsUUID()
    id: string
    @IsNotEmpty()
    update: boolean
    @IsNotEmpty()
    create: boolean
    @IsNotEmpty()
    delete: boolean
    @IsNotEmpty()
    fetch : boolean
}