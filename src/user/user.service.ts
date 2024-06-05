import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user.entity";
import { LoginDto, SignupDto } from "./user.dto";
import * as bcrypt from 'bcrypt'
import { JwtService } from "./jwt.service";

@Injectable()
export class UserService{
    constructor(
        @InjectRepository(User)
        private readonly userRepository : Repository<User>,

        private readonly jwtService: JwtService
    ){}

    private readonly saltRounds = 10

    async createUser(signupDto: SignupDto){
        const existingUser  = await this.userRepository.findOneBy({
            username: signupDto.username
        })
        if(!existingUser){
            const hashedPassword = await this.hashPassword(signupDto.password)
            const user : User= this.userRepository.create()
            user.password = hashedPassword
            user.username = signupDto.username
            user.role = signupDto.role
            const newUser=  await this.userRepository.save(user)
            return newUser
        }
        return null
    }

    async loginUser(loginDto: LoginDto){
        const existingUser : User = await this.userRepository.findOneBy({
            username: loginDto.username
        })
        if(existingUser){
            if(await this.comparePassword(loginDto.password, existingUser.password)){
                const token  = await this.jwtService.generateToken({
                    id: existingUser.id,
                    role: existingUser.role,
                    username: existingUser.username
                })
                return token
            }
        }
        return null
    }

    async hashPassword(password: string){
        return await bcrypt.hash(password,this.saltRounds)
    }

    async comparePassword(password: string, hashedPassword){
        return await bcrypt.compare(password,hashedPassword)
    }

    async getUserById(id: string){
        return await this.userRepository.findOneBy({
            id
        })
    }
}