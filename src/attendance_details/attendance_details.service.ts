import { Injectable } from '@nestjs/common';
import { CreateAttendanceDetailInput } from './dto/create-attendance_detail.input';
import { UpdateAttendanceDetailInput } from './dto/update-attendance_detail.input';

@Injectable()
export class AttendanceDetailsService {
  create(createAttendanceDetailInput: CreateAttendanceDetailInput) {
    return 'This action adds a new attendanceDetail';
  }

  findAll() {
    return `This action returns all attendanceDetails`;
  }

  findOne(id: number) {
    return `This action returns a #${id} attendanceDetail`;
  }

  update(id: number, updateAttendanceDetailInput: UpdateAttendanceDetailInput) {
    return `This action updates a #${id} attendanceDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} attendanceDetail`;
  }
}
