import { Module } from '@nestjs/common';
import { ProductController } from './products.controller';
import { JwtService } from 'src/user/jwt.service';

@Module({
    imports:[],
    controllers:[ProductController],
    providers:[JwtService],
    exports:[]
})
export class ProductsModule {}
