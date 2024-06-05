import { Body, Controller, HttpException, HttpStatus, Post, Res } from "@nestjs/common";
import { UserService } from "./user.service";
import { LoginDto, SignupDto } from "./user.dto";
import {Response} from 'express'

@Controller('user')
export class UserController{
    constructor(
        private readonly userService: UserService
    ){}

    @Post('signup')
    async createUser(@Body() signupDto: SignupDto, @Res() res: Response){
        const user = await this.userService.createUser(signupDto)
        if(!user) throw new HttpException('Unable to signup', HttpStatus.BAD_REQUEST) 
            else return res.status(HttpStatus.CREATED).send({
                message: 'User Created'
            })
    }

    @Post('login')
    async loginUser(@Body() loginDto : LoginDto, @Res() res: Response){
        const token = await this.userService.loginUser(loginDto)
        if(!token) throw new HttpException('Unable to login', HttpStatus.UNAUTHORIZED) 
            else return res.status(HttpStatus.OK).send({
                message: 'LoggedIn Success',
                token 
            })
    }
}