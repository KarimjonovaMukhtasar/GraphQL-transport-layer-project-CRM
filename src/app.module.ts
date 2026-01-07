import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StaffsModule } from './staffs/staffs.module';
import { StudentsModule } from './students/students.module';
import { CoursesModule } from './courses/courses.module';
import { GroupsModule } from './groups/groups.module';
import { StudentGroupsModule } from './student_groups/student_groups.module';
import { LessonsModule } from './lessons/lessons.module';
import { AttendanceModule } from './attendance/attendance.module';
import { PaymentsModule } from './payments/payments.module';
import { ScheduleModule } from './schedule/schedule.module';
import { AttendanceDetailsModule } from './attendance_details/attendance_details.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [StaffsModule, StudentsModule, CoursesModule, GroupsModule, StudentGroupsModule, LessonsModule, AttendanceModule, PaymentsModule, ScheduleModule, AttendanceDetailsModule
     GraphQLModule.forRoot<ApolloDriverConfig>{
        driver: ApolloDriver,
        autoSchemaFile: true,
        graphiql: true
     }
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
