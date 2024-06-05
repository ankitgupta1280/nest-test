import { Module } from '@nestjs/common';
import { ProductController } from './products.controller';

@Module({
    imports:[],
    controllers:[ProductController],
    providers:[],
    exports:[]
})
export class ProductsModule {}
