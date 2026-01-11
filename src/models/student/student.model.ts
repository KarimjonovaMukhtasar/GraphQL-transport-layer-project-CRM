import { Field, ID, Int, ObjectType} from "@nestjs/graphql";
import { role } from "@prisma/client";



@ObjectType()
export class student {
  @Field(() => ID)
  id: string;

  @Field() 
  first_name: string;        

  @Field()
  last_name: string;

  @Field()
  username: string;

  @Field()
  address: string;

  @Field()
  phone: string;

  @Field()
  birth_date: string; 

  @Field()
  enrollment_date: string
}

@ObjectType()
export class studentRegisteredResponse{
    @Field()
    success: boolean

    @Field()
    message: string

    @Field()
    student: student
}

@ObjectType()
export class studentGetResponse{
    @Field()
    success: boolean

    @Field(() => Int)
    count: number

    @Field(() => [student])
    students: [student]
}