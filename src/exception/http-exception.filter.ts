import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { Response} from 'express'

@Catch()
export class HttpExceptionFilter implements ExceptionFilter{
    catch(exception: unknown, host : ArgumentsHost){
        const ctx = host.switchToHttp()
        const response = ctx.getResponse<Response>()
        const request = ctx.getRequest<Request>()
        const status = exception instanceof HttpException ? exception.getStatus():HttpStatus.INTERNAL_SERVER_ERROR;
        const message = exception instanceof HttpException ? exception.getResponse(): {message:'Internal Server Error'}
        response.status(status).json({
            statusCode:status,
            timestamp: new Date().toString(),
            path: request.url,
            message: typeof message === 'string' ? message : (message as any).message
        })
    }
}