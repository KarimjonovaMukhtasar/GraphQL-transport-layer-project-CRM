import {
  BadGatewayException,
  BadRequestException,
  Injectable
} from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { createGroupDto } from "./dto/create.group.dto";

@Injectable()
export class GroupService {
  constructor(private readonly prisma: PrismaService) {}

  async createGroup(payload: createGroupDto) {
    const course = await this.prisma.courses.findUnique({where: {id: payload.course_id}})
    if (!course) {
      throw new BadRequestException(
        `NOT FOUND SUCH A COURSE ID IN THE DATABASE!`
      );
    }
    const teacher = await this.prisma.staffs.findUnique({
      where: { id: payload.teacher_id }
    });
    if (!teacher) {
      throw new BadRequestException(
        `NOT FOUND SUCH A TEACHER ID IN THE DATABASE!`
      );
    }
    const name = await this.prisma.groups.findUnique({where: {name: payload.name}})
    if(name){
      throw new BadGatewayException(`THIS GROUP NAME ALREADY EXISTS!`)
    }
    const start_date = new Date(payload.start_date)
    const end_date = new Date(payload.end_date)
    const group = await this.prisma.groups.create({
      data: {...payload, start_date, end_date, status:'planned'}
    });
    return {
      success: true,
      message: `SUCCESSFULLY CREATED A NEW GROUP`,
      group: {
      id: group.id,
      name: group.name,
      course: {
        id: course.id,
        name: course.name
      },
      teacher: {
        id: teacher.id,
        staff: {
          first_name: teacher.first_name,
          last_name: teacher.last_name
        }
      },
      start_date: group.start_date,
      schedule: group.schedule,
      max_students: group.max_students,
      status: group.status
    }
    };
  }
}
