import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig} from '@nestjs/apollo';
import { AuthModule } from './models/auth/auth.module';
import { StaffModule } from './models/staffs/staff.module';
import { ConfigModule } from '@nestjs/config';

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
     StaffModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
