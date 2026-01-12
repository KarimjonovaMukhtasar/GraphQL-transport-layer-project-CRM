import { BadRequestException, Injectable, PayloadTooLargeException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { registerTeacherDto } from "./dto/create.teacher.dto";
import bcrypt from "bcrypt";

@Injectable()
export class TeacherService {
  constructor(private readonly prisma: PrismaService) {}

  async registerTeacher(payload: registerTeacherDto) {
    const id = payload.staff_id;
    const teacher = await this.prisma.staffs.findUnique({
      where: { id }
    });
    if (!teacher) {
      throw new BadRequestException(
        `NOT FOUND SUCH A STAFF ID IN THE DATABASE!`
      );
    }
    await this.prisma.staffs.update( {data: {role:'teacher'}, where: {id}})
    return {
      success: true,
      message: `SUCCESSFULLY CREATED A NEW TEACHER`,
      teacher: {
              id: teacher.id,
              staff: {
                id: teacher.id,
                first_name: teacher.first_name,
                last_name: teacher.last_name
              },
              specialization: payload.specialization,
              education: payload.education,
              experience: payload.experience
          }
    };
  }
}
