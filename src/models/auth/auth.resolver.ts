import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { StaffResponse } from "./staff.model";
import { LoginDto } from "./auth.dto/login.dto";
import { AuthService } from "./auth.service";
import { UseGuards } from "@nestjs/common";
import { StudentResponse } from "./student.model";

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => StaffResponse)
  loginStaff(@Args("payload") payload: LoginDto) {
    return this.authService.loginStaff(payload);
  }

  @Mutation(() => StudentResponse)
  loginStudent(@Args("payload") payload: LoginDto) {
    return this.authService.loginStudent(payload);
  }
}
