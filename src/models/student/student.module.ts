import { Module } from "@nestjs/common";
import { StudentResolver } from "./student.resolver";
import { StudentService } from "./student.service";
import { PrismaService } from "src/prisma/prisma.service";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";

@Module({
  imports: [],
  providers: [StudentResolver, JwtService, StudentService, PrismaService, ConfigService],
  exports: [StudentService]
})
export class StudentModule {}
