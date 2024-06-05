import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { JwtService } from "./jwt.service";
import { UserService } from "./user.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./user.entity";


@Module({
    imports:[
        TypeOrmModule.forFeature([User])
    ],
    providers:[JwtService, UserService],
    controllers:[UserController],
    exports:[JwtService, UserService]

})
export class UserModule{}
