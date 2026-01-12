import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { createCourseResponse } from "./course.model";
import { UseGuards } from "@nestjs/common";
import { RolesGuard } from "src/guards/role.guard";
import { CourseService } from "./course.service";
import { createCourseDto } from "./dto/create.coursedto";
import { AuthGuard } from "src/guards/auth.guard";
import { Roles } from "src/decorators/roles.decorator";
import { role } from "@prisma/client";

@Resolver()
export class CourseResolver {
  constructor(private readonly courseService: CourseService) {}

  @Mutation(() => createCourseResponse)
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(role.admin)
  createCourse(@Args("payload") payload: createCourseDto) {
    return this.courseService.createCourse(payload);
  }
}
