import { Field, ID, Int, ObjectType, registerEnumType} from "@nestjs/graphql";
import { Level } from "@prisma/client";



registerEnumType(Level, {
  name: 'Level',
  description: 'The Course Levels'
});

@ObjectType()
export class course{
    @Field(()=> ID)
    id: string
    
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

    @Field()
    is_active: boolean
}

@ObjectType()
export class createCourseResponse{
    @Field()
    success: boolean

    @Field()
    message: string

    @Field()
    course: course
}
