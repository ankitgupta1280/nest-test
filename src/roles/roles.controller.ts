import { Body, Controller, Param, Post, Put, Res } from "@nestjs/common";
import { CreateRoleDto } from "./dtos/createRole.dto";
import { UpdateRoleDto } from "./dtos/updateRole.dto";

@Controller('roles')
export class RoleController{
    constructor(){}

    @Post()
    async createRole(@Body() createRoleDto: CreateRoleDto, @Res() res: any){

    }

    @Put(':roleId')
    async updateRole(@Param('roleId') roleId: string, @Body() updateRoleDto: UpdateRoleDto, @Res() res: any){

    }
}