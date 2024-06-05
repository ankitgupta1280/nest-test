import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { RolesModule } from './roles/roles.module';
import { User } from './user/user.entity';
import { Role } from './roles/roles.entity';
import { UserModule } from './user/user.module';
import { JwtAuthGuard } from './guards/jwt.guard';
import { RoleGuard } from './guards/role.guard';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './exception/http-exception.filter';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: 5432,
      host: 'localhost',
      username: 'postgres',
      password: 'postgres',
      database: 'nest_test',
      entities: [User, Role],
      synchronize: true,
    }),
    ProductsModule,
    RolesModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService, JwtAuthGuard, RoleGuard,
    {
      provide:APP_FILTER,
      useClass: HttpExceptionFilter
    },
  ],
  exports:[JwtAuthGuard, RoleGuard]
})
export class AppModule {}
