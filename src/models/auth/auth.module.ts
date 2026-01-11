import { Module } from "@nestjs/common";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { AuthResolver } from "./auth.resolver";
import { AuthService } from "./auth.service";
import { PrismaService } from "src/prisma/prisma.service";
import { ConfigService } from "@nestjs/config";

@Module({
    imports: [JwtModule.register({})],
    providers: [JwtService, AuthResolver, AuthService, PrismaService, ConfigService],
    exports: [AuthService]
})

export class AuthModule{}