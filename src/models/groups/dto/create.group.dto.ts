import { Field, InputType, Int } from "@nestjs/graphql";
import { role } from "@prisma/client";

@InputType()
export class createGroupDto{
    @Field()
    name: string

    @Field()
    course_id: string

    @Field()
    teacher_id: string

    @Field()
    start_date: string

    @Field()
    end_date: string

    @Field()
    schedule: string

    @Field(()=> Int)
    max_students: number

}