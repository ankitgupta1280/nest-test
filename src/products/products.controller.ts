import { Controller, Delete, Get, HttpStatus, Patch, Post, Put, Res, UseGuards } from "@nestjs/common";
import { Roles } from "src/decorators/role.decorator";
import { JwtAuthGuard } from "src/guards/jwt.guard";
import { RoleGuard } from "src/guards/role.guard";
import { ROLES } from "src/roles/constants/constant";
import { Response } from 'express'

@UseGuards(JwtAuthGuard)
@Controller('products')
export class ProductController{
    constructor(){}

    @Post()
    @Roles(ROLES.ADMIN, ROLES.SELLER)
    @UseGuards(RoleGuard)
    async createProduct(@Res() res: Response){
        return res.status(HttpStatus.CREATED).send({
            message: 'Product added successfully'
        })
    }

    @Get()
    @Roles(ROLES.ADMIN, ROLES.CUSTOMER, ROLES.SELLER, ROLES.SUPPORTER)
    @UseGuards(RoleGuard)
    async getProductDetails(@Res() res: Response): Promise<any>{
        return res.status(HttpStatus.OK).send({
            message: 'Products sent successfully'
        })
    }

    @Put()
    @Roles(ROLES.ADMIN, ROLES.SELLER)
    @UseGuards(RoleGuard)
    async updateProductDetails(@Res() res: Response){
        return res.status(HttpStatus.OK).send({
            message: 'Product updated successfully'
        })
    }

    @Patch()
    @Roles(ROLES.ADMIN, ROLES.SELLER)
    @UseGuards(RoleGuard)
    async patchProductDetails(@Res() res: Response){
        return res.status(HttpStatus.OK).send({
            message: 'Product updated successfully'
        })
    }

    @Delete()
    @Roles(ROLES.ADMIN,ROLES.SUPPORTER)
    @UseGuards(RoleGuard)
    async deleteProduct(@Res() res: Response){
        return res.status(HttpStatus.OK).send({
            message: 'Product deleted successfully'
        })
    }

}