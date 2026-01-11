import { BadRequestException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { registerStaffDto } from "./dto/create.staff.dto";
import  bcrypt from "bcrypt"

@Injectable()
export class StaffService{
    constructor(private readonly prisma: PrismaService){}

    async registerStaff(payload: registerStaffDto){
        const username = payload.username
        const checkUsername = await this.prisma.staffs.findUnique({where: {username}})
        if(checkUsername){
            throw new BadRequestException(`THIS USERNAME ALREADY EXISTS IN THE DATABASE!`)
        }
        payload.password = await bcrypt.hash(payload.password, 10)
        const staff = await this.prisma.staffs.create({data: payload})
        return {
            success: true,
            message: `SUCCESSFULLY REGISTERED A NEW STAFF MEMBER`,
            staff
        }
    }
    
    async getAllStaff(){
        const staff = await this.prisma.staffs.findMany()
        return {
            success: true,
            message: `SUCCESSFULLY RETRIEVED ALL STAFF MEMBERS!`,
            staffs: staff
        }
    }
}