import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './roles.entity';
import { RoleService } from './roles.service';
import { RoleController } from './roles.controller';

@Module({
    imports:[TypeOrmModule.forFeature([Role])],
    providers:[RoleService],
    controllers:[RoleController],
    exports:[RoleService]
})
export class RolesModule {}
