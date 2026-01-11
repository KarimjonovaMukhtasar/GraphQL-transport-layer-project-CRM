import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { studentRegisteredResponse, studentGetResponse } from "./student.model";
import { UseGuards } from "@nestjs/common";
import { RolesGuard } from "src/guards/role.guard";
import { StudentService } from "./student.service";
import { registerStudentDto } from "./dto/create.student.dto";
import { AuthGuard } from "src/guards/auth.guard";
import { Roles } from "src/decorators/roles.decorator";
import { role } from "@prisma/client";


@Resolver()
export class StudentResolver {
  constructor(private readonly studentService: StudentService) {}

  @Mutation(() => studentRegisteredResponse)
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(role.admin)
  registerStudent(@Args("payload") payload: registerStudentDto) {
    return this.studentService.registerStudent(payload);
  }

  @Query(() => studentGetResponse)
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(role.admin)
  getAllStudents() {
    return this.studentService.getAllStudents();
  }
}
