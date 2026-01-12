import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { createGroupResponse} from "./group.model";
import { UseGuards } from "@nestjs/common";
import { RolesGuard } from "src/guards/role.guard";
import { GroupService } from "./group.service";
import { createGroupDto } from "./dto/create.group.dto";
import { AuthGuard } from "src/guards/auth.guard";
import { Roles } from "src/decorators/roles.decorator";
import { role } from "@prisma/client";

@Resolver()
export class GroupResolver {
  constructor(private readonly GroupService: GroupService) {}

  @Mutation(() => createGroupResponse)
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(role.admin)
  createGroup(@Args("payload") payload: createGroupDto) {
    return this.GroupService.createGroup(payload);
  }
}
