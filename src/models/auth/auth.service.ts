import {
  BadRequestException,
  Injectable,
  NotFoundException
} from "@nestjs/common";
import { LoginDto } from "./auth.dto/login.dto";
import { PrismaService } from "src/prisma/prisma.service";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { role } from "@prisma/client";

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService
  ) {}

  async loginStaff(payload: LoginDto) {
    const staff = await this.prisma.staffs.findUnique({
      where: { username: payload.username }
    });
    if (!staff)
      throw new NotFoundException(
        `THIS STAFF USERNAME CANNOT BE FOUND FROM THE DATABASE!`
      );

    const password = await bcrypt.compare(payload.password, staff.password);
    if (!password)
      throw new BadRequestException(
        `PASSWORD OR USERNAME IS INCORRECT, CHECK THE SPELLING!`
      );

    const tokens = await this.getTokens(staff.id, staff.username, staff.role);
    return {
      success: true,
      message: `SUCCESSFULLLY LOGGED IN!`,
      tokens,
      staff
    };
  }

  async loginStudent(payload: LoginDto) {
    const student = await this.prisma.students.findUnique({
      where: { username: payload.username }
    });
    if (!student)
      throw new NotFoundException(
        `THIS STUDENT USERNAME CANNOT BE FOUND FROM THE DATABASE!`
      );

    const password = await bcrypt.compare(payload.password, student.password);
    if (!password)
      throw new BadRequestException(
        `PASSWORD OR USERNAME IS INCORRECT, CHECK THE SPELLING!`
      );

    const tokens = await this.getTokens(student.id, student.username);
    return {
      success: true,
      message: `SUCCESSFULLLY LOGGED IN!`,
      tokens,
      student
    };
  }

  async getTokens(staffId: string, username: string, role?: role) {
    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(
        { sub: staffId, role, username },
        { secret: process.env.JWT_SECRET, expiresIn: "7d" }
      ),
      this.jwtService.signAsync(
        { sub: process.env.JWT_SECRET },
        { secret: process.env.JWT_SECRET, expiresIn: "30d" }
      )
    ]);
    return { accessToken: at, refreshToken: rt };
  }
}
