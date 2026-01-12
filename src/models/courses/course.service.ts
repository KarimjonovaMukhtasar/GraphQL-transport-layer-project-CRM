import {
  BadRequestException,
  Injectable,
} from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { createCourseDto } from "./dto/create.coursedto";

@Injectable()
export class CourseService {
  constructor(private readonly prisma: PrismaService) {}

  async createCourse(payload: createCourseDto) {
    const nameCheck = await this.prisma.courses.findFirst({
      where: { name: payload.name }
    });
    if (nameCheck) {
      throw new BadRequestException(
        `THIS COURSE NAME ALREADY EXISTS IN THE DATABASE!`
      );
    }
   const course = await this.prisma.courses.create({data: payload})
    return {
      success: true,
      message: `SUCCESSFULLY CREATED A NEW COURSE`,
      course: course
    };
  }
}
