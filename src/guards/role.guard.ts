import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { User } from "src/user/user.entity";
import { UserService } from "src/user/user.service";

@Injectable()
export class RoleGuard implements CanActivate{
    constructor(
        // private readonly userService: UserService,
        private readonly reflector: Reflector
    ){}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest()
        // const user : User = await this.userService.getUserById(request.user.id)
        const requiredRoles: String[] = this.reflector.getAllAndOverride<String[]>('requiredRoles',[
            context.getHandler(), context.getClass()
        ])
        if(requiredRoles.includes(request.user.roleName))
            return true;
        throw new UnauthorizedException('User Not Authorized to access this resource') ;
    }
}