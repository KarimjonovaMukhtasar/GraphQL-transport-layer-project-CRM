import { Module } from "@nestjs/common";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { AuthResolver } from "./auth.resolver";
import { AuthService } from "./auth.service";
import { PrismaService } from "src/prisma/prisma.service";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
    imports: [JwtModule.registerAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (config: ConfigService) => ({
    secret: config.get<string>('JWT_SECRET'),
    signOptions: { expiresIn: '30d' },
  })})],
    providers: [JwtService, AuthResolver, AuthService, PrismaService, ConfigService],
    exports: [AuthService]
})

export class AuthModule{}