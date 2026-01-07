import { Module } from '@nestjs/common';
import { StudentGroupsService } from './student_groups.service';
import { StudentGroupsResolver } from './student_groups.resolver';

@Module({
  providers: [StudentGroupsResolver, StudentGroupsService],
})
export class StudentGroupsModule {}
