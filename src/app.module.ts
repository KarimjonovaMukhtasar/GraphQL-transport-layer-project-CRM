import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig} from '@nestjs/apollo';
import { AuthModule } from './models/auth/auth.module';
import { StaffModule } from './models/staffs/staff.module';
import { ConfigModule } from '@nestjs/config';
import { StudentModule } from './models/student/student.module';

@Module({
  imports: [
     ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env'
     }),
     GraphQLModule.forRoot<ApolloDriverConfig>({
        driver: ApolloDriver,
        autoSchemaFile: true,
        graphiql: true,
        context: ({req,res}) => ({req, res})
     }),
     AuthModule,
     StaffModule,
     StudentModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
