import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AttendanceDetailsService } from './attendance_details.service';
import { AttendanceDetail } from './entities/attendance_detail.entity';
import { CreateAttendanceDetailInput } from './dto/create-attendance_detail.input';
import { UpdateAttendanceDetailInput } from './dto/update-attendance_detail.input';

@Resolver(() => AttendanceDetail)
export class AttendanceDetailsResolver {
  constructor(private readonly attendanceDetailsService: AttendanceDetailsService) {}

  @Mutation(() => AttendanceDetail)
  createAttendanceDetail(@Args('createAttendanceDetailInput') createAttendanceDetailInput: CreateAttendanceDetailInput) {
    return this.attendanceDetailsService.create(createAttendanceDetailInput);
  }

  @Query(() => [AttendanceDetail], { name: 'attendanceDetails' })
  findAll() {
    return this.attendanceDetailsService.findAll();
  }

  @Query(() => AttendanceDetail, { name: 'attendanceDetail' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.attendanceDetailsService.findOne(id);
  }

  @Mutation(() => AttendanceDetail)
  updateAttendanceDetail(@Args('updateAttendanceDetailInput') updateAttendanceDetailInput: UpdateAttendanceDetailInput) {
    return this.attendanceDetailsService.update(updateAttendanceDetailInput.id, updateAttendanceDetailInput);
  }

  @Mutation(() => AttendanceDetail)
  removeAttendanceDetail(@Args('id', { type: () => Int }) id: number) {
    return this.attendanceDetailsService.remove(id);
  }
}
