import { Module } from "@nestjs/common";
import { GroupResolver } from "./group.resolver";
import { GroupService } from "./group.service";
import { PrismaService } from "src/prisma/prisma.service";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";

@Module({
  imports: [],
  providers: [
    GroupResolver,
    JwtService,
    GroupService,
    PrismaService,
    ConfigService
  ],
  exports: [GroupService]
})
export class GroupModule {}
