import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Role } from "./roles.entity";
import { Repository } from "typeorm";
import { ROLES } from "./constants/constant";

@Injectable()
export class RoleService{
    constructor(
        @InjectRepository(Role)
        private readonly roleRepository: Repository<Role>
    ){}

    async seed(){
        //order in array elements is roleName, create, update, fetch, delete
        const rolePermissions = [[ROLES.ADMIN,true, true, true, true],[ROLES.CUSTOMER, false,false, true, false],[ROLES.SUPPORTER,false, false, true, true ],[ROLES.SELLER,true, true, true, false]]
        for(const role of rolePermissions){
            const newRole : Role = this.roleRepository.create()
            newRole.roleName = String(role[0])
            newRole.create = Boolean(role[1])
            newRole.update = Boolean(role[2])
            newRole.fetch = Boolean(role[3])
            newRole.delete = Boolean(role[4])
            await this.roleRepository.save(newRole)
        }
        return 
    }
}