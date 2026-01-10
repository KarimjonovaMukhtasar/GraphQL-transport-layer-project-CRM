import { Field, ObjectType } from "@nestjs/graphql";
import { role } from "@prisma/client";


@ObjectType()
export class StaffResponse{
    @Field()
    success: boolean

    @Field()
    message: string

    @Field()
    tokens: Tokens

    @Field()
    staff: Staff
}

@ObjectType()
export class Staff {
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
export class Tokens{
    @Field()
    accessToken: string

    @Field()
    refreshToken: string
}