import { CanActivate, Injectable , ExecutionContext, UnauthorizedException} from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import {JwtService}  from "@nestjs/jwt"


@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private jwtService: JwtService){}
    async canActivate(context: ExecutionContext){
        const ctx = GqlExecutionContext.create(context)
        const {req} = ctx.getContext()
        const authHeader = req.headers.authorization
        if(!authHeader){
            throw new UnauthorizedException('NOT AUTHORIZED YET!')
        }
        const [bearer, token] = authHeader.split(' ')
        if(bearer !== 'Bearer' || !token){
            throw new UnauthorizedException('INVALID TOKEN FORMAT!')
        }
        try{
            const payload = await this.jwtService.verifyAsync(token, {
                secret: process.env.JWT_SECRET
            })
            req.user = payload
            return true
        }catch(error){
            throw new UnauthorizedException('TOKEN IS INVALID OR EXPIRED')
        }
    }
}