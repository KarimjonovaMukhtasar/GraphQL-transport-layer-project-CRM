import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class LoginDto{
    @Field({nullable: false})
    username: string

    @Field({nullable: false})
    password: string
}