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
    firstName: string

    @Field()
    lastName: string

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



