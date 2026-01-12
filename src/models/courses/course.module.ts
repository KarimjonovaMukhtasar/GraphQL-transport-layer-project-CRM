import { Module } from "@nestjs/common";
import { CourseResolver } from "./course.resolver";
import { CourseService } from "./course.service";
import { PrismaService } from "src/prisma/prisma.service";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";

@Module({
  imports: [],
  providers: [
    CourseResolver,
    JwtService,
    CourseService,
    PrismaService,
    ConfigService
  ],
  exports: [CourseService]
})
export class CourseModule {}
