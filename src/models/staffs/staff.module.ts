import { Module } from "@nestjs/common";
import { StaffResolver } from "./staff.resolver";
import { StaffService } from "./staff.service";
import { PrismaService } from "src/prisma/prisma.service";
import { ConfigService } from "@nestjs/config";


@Module({
    imports: [],
    providers: [StaffResolver, StaffService , PrismaService, ConfigService ],
    exports: [StaffService]
})

export class StaffModule{}