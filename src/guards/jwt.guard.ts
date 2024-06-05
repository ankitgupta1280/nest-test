import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Observable } from "rxjs";
import { JwtService } from "src/user/jwt.service";

@Injectable()
export class JwtAuthGuard implements CanActivate{
    constructor(
        private readonly jwtService: JwtService
    ){}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        const authorizationHeader = request.headers.authorization;
        if(!authorizationHeader || !authorizationHeader.startsWith('Bearer ')){
            throw new UnauthorizedException('User Not Authenticated')
        }
        const token = authorizationHeader.split(' ')[1]
        const user = this.jwtService.verifyToken(token)
        if(!user) throw new UnauthorizedException('User Not Authenticated')
        request.user = user
        return true;
    }
}