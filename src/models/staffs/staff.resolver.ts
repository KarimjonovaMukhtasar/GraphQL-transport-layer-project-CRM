import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { staffRegisteredResponse, staffGetResponse } from "./staff.model";
import { UseGuards } from "@nestjs/common";
import { RolesGuard } from "src/guards/role.guard";
import { StaffService } from "./staff.service";
import { registerStaffDto } from "./dto/create.staff.dto";
import { AuthGuard } from "src/guards/auth.guard";
import { Roles } from "src/decorators/roles.decorator";
import { role } from "@prisma/client";

@Resolver()
export class StaffResolver {
  constructor(private readonly staffService: StaffService) {}

  @Mutation(() => staffRegisteredResponse)
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(role.admin)
  registerStaff(@Args("payload") payload: registerStaffDto ) {
    return this.staffService.registerStaff(payload);
  }

  @Query(() => staffGetResponse)
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(role.admin)
  getAllStaff() {
    return this.staffService.getAllStaff();
  }
}
