import { Field, ObjectType } from "@nestjs/graphql";
import { role } from "@prisma/client";

@ObjectType()
export class tokens{
    @Field()
    accessToken: string

    @Field()
    refreshToken: string
}

@ObjectType()
export class staff {
    @Field()
    id: string

    @Field()
    firstName: string

    @Field()
    lastName: string

    @Field()
    username: string
        
    @Field()
    role: role

    @Field()  
    position: string
}

@ObjectType()
export class StaffResponse{
    @Field()
    success: boolean

    @Field()
    message: string

    @Field()
    tokens: tokens

    @Field()
    staff: staff
}
