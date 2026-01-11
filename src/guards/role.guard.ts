import { Injectable, CanActivate, ExecutionContext,  ForbiddenException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { GqlExecutionContext } from "@nestjs/graphql";
import { ROLES_KEY} from "src/decorators/roles.decorator";
import { role } from "@prisma/client";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean {
        const requiredRoles = this.reflector.getAllAndOverride<role[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass()
        ])

        if(!requiredRoles){
            return true
        }

        const ctx = GqlExecutionContext.create(context)
        const {req} = ctx.getContext()
        const user = req.user
        if(!user){
            throw new ForbiddenException("USER NOT FOUND, CHECK AUTHORIZATION FIRST!")
        }

        const allowedRoles = requiredRoles.some((role) => user.role === role)
        if(!allowedRoles){
            throw new ForbiddenException(`YOU ARE NOT ALLOWED TO USE THIS REQUEST`)
        }
        return true
    }
}