import { Field, ID, Int, ObjectType} from "@nestjs/graphql";


@ObjectType()
export class staffs {
  @Field(() => ID)
  id: string;

  @Field() 
  first_name: string;        

  @Field()
  last_name: string;
}

@ObjectType()
export class teacher{
    @Field()
    id: string

    @Field()
    staff: staffs

    @Field()
    specialization: string

    @Field()
    education: string

    @Field(()=> Int)
    experience: number
}

@ObjectType()
export class teacherRegisteredResponse{
    @Field()
    success: boolean

    @Field()
    message: string

    @Field()
    teacher: teacher
}
