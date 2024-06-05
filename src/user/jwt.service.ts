import { Injectable } from "@nestjs/common";
import * as jwt from 'jsonwebtoken'

@Injectable()
export class JwtService{
    constructor(){}
    private readonly secretKey = process.env.JwtSecretKey

    async generateToken(payload:any){
        return await jwt.sign(payload, this.secretKey, {expiresIn: `${process.env.jwtExpiresInHours}h`})
    }
    async verifyToken(token: string){
        try{
            return await jwt.verify(token, this.secretKey)
        }catch(err){
            return null
        }
    }
}