import { Module } from '@nestjs/common';
import { AttendanceDetailsService } from './attendance_details.service';
import { AttendanceDetailsResolver } from './attendance_details.resolver';

@Module({
  providers: [AttendanceDetailsResolver, AttendanceDetailsService],
})
export class AttendanceDetailsModule {}
