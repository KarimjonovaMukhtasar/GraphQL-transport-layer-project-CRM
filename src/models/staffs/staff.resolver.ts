import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { staffRegisteredResponse, staffGetResponse } from "./staff.model";
import { UseGuards } from "@nestjs/common";
import { RolesGuard } from "src/guards/role.guard";
import { StaffService } from "./staff.service";
import { registerStaffDto } from "./dto/create.staff.dto";

@Resolver()
export class StaffResolver {
  constructor(private readonly staffService: StaffService) {}

  @Mutation(() => staffRegisteredResponse)
  registerStaff(@Args("payload") payload: registerStaffDto ) {
    return this.staffService.registerStaff(payload);
  }

  @Query(() => staffGetResponse)
  getAllStaff() {
    return this.staffService.getAllStaff();
  }
}
