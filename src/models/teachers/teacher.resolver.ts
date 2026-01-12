import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { teacherRegisteredResponse } from "./teacher.model";
import { UseGuards } from "@nestjs/common";
import { RolesGuard } from "src/guards/role.guard";
import { TeacherService } from "./teacher.service";
import { registerTeacherDto } from "./dto/create.teacher.dto";
import { AuthGuard } from "src/guards/auth.guard";
import { Roles } from "src/decorators/roles.decorator";
import { role } from "@prisma/client";

@Resolver()
export class TeacherResolver {
  constructor(private readonly teacherService: TeacherService) {}

  @Mutation(() => teacherRegisteredResponse)
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(role.admin)
  registerTeacher(@Args("payload") payload: registerTeacherDto) {
    return this.teacherService.registerTeacher(payload);
  }
}
