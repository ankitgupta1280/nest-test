import { IsAlphanumeric, IsEnum, IsNotEmpty, MaxLength, MinLength } from "class-validator"
import { ROLES } from "src/roles/constants/constant"

export class SignupDto{
    @MinLength(6)
    @IsNotEmpty()
    @MaxLength(25)
    username: string

    @IsAlphanumeric()
    @MinLength(8)
    @MaxLength(25)
    @IsNotEmpty()
    password: string

    @IsEnum(ROLES)
    @IsNotEmpty()
    role: ROLES
}

export class LoginDto{
    @IsNotEmpty()
    username: string

    @IsNotEmpty()
    password: string
}