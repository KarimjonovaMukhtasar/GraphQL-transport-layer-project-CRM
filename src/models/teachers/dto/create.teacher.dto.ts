import { Field, InputType, Int } from "@nestjs/graphql";
import { role } from "@prisma/client";

@InputType()
export class registerTeacherDto{
    @Field()
    staff_id: string

    @Field()
    specialization: string

    @Field()
    education: string

    @Field(()=> Int)
    experience: number

}