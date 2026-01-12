import { Field, InputType, Int } from "@nestjs/graphql";
import { Level} from "@prisma/client";

@InputType()
export class createCourseDto{
    @Field()
    name: string

    @Field()
    description: string

    @Field(()=> Int)
    price: number

    @Field(()=> Int)
    duration: number

    @Field()
    level: Level
}