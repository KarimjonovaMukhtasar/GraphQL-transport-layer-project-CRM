import { BadRequestException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { registerStudentDto } from "./dto/create.student.dto";
import bcrypt from "bcrypt";

@Injectable()
export class StudentService {
  constructor(private readonly prisma: PrismaService) {}

  async registerStudent(payload: registerStudentDto) {
    const username = payload.username;
    const checkUsername = await this.prisma.students.findUnique({
      where: { username }
    });
    if (checkUsername) {
      throw new BadRequestException(
        `THIS USERNAME ALREADY EXISTS IN THE DATABASE!`
      );
    }
    payload.password = await bcrypt.hash(payload.password, 10);
    const student = await this.prisma.students.create({ data: payload });
    return {
      success: true,
      message: `SUCCESSFULLY REGISTERED A NEW STUDENT`,
      student
    };
  }

  async getAllStudents() {
    const students= await this.prisma.students.findMany();
    return {
      success: true,
      message: `SUCCESSFULLY RETRIEVED ALL STUDENTS!`,
      students
    };
  }
}
