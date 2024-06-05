import { Injectable } from "@nestjs/common";
import * as jwt from 'jsonwebtoken'

@Injectable()
export class JwtService{
    constructor(){}
    private readonly secretKey = process.env.JwtSecretKey

    generateToken(payload:any): string{
        return jwt.sign(payload, this.secretKey, {expiresIn: `${process.env.jwtExpiresInHours}h`})
    }
    verifyToken(token: string){
        try{
            return jwt.verify(token, this.secretKey)
        }catch(err){
            return null
        }
    }
}