import { Field, InputType } from "@nestjs/graphql";
import { role } from "@prisma/client";

@InputType()
export class registerStaffDto{
    @Field()
    first_name: string

    @Field()
    last_name: string

    @Field()
    username: string

    @Field()
    password: string

    @Field()
    role: role

    @Field()
    position: string

    @Field()
    phone: string

    @Field()
    address: string
}