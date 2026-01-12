import { Module } from "@nestjs/common";
import { TeacherResolver } from "./teacher.resolver";
import { TeacherService } from "./teacher.service";
import { PrismaService } from "src/prisma/prisma.service";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";

@Module({
  imports: [],
  providers: [
    TeacherResolver,
    JwtService,
    TeacherService,
    PrismaService,
    ConfigService
  ],
  exports: [TeacherService]
})
export class TeacherModule {}
