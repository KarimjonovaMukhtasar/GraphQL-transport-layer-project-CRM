import { Field, ObjectType } from "@nestjs/graphql";
import { role } from "@prisma/client";

@ObjectType()
export class Tokens{
    @Field()
    accessToken: string

    @Field()
    refreshToken: string
}

@ObjectType()
export class Student {
    @Field()
    id: string

    @Field()
    first_name: string

    @Field()
    last_name: string

    @Field()
    username: string
} 

@ObjectType()
export class StudentResponse{
    @Field()
    success: boolean

    @Field()
    tokens: Tokens

    @Field()
    student: Student
}



