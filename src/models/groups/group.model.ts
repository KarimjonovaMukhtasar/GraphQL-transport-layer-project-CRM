import { Field, ID, Int, ObjectType, registerEnumType} from "@nestjs/graphql";
import { GroupStatus } from "@prisma/client";

registerEnumType(GroupStatus, {
  name: 'GroupStatus',
  description: 'The group status cases' 
});

@ObjectType()
export class Course {
  @Field(() => ID)
  id: string;

  @Field() 
  name: string;        
}



@ObjectType()
export class STAFF {
  @Field() 
  first_name: string;   
  
  @Field() 
  last_name: string;   
}

@ObjectType()
export class  teacherr{
    @Field()
    id: string

    @Field(()=> STAFF)
    staff: STAFF
}

@ObjectType()
export class group {
  @Field(() => ID)
  id: string;

  @Field() 
  name: string;  
  
  @Field(() => Course)
  course: Course;

  @Field(() => teacherr) 
  teacher: teacherr;

  @Field(() => Date)
  start_date: Date;

  @Field()
  schedule: string;

  @Field(() => Int)
  max_students: number;

  @Field(() => GroupStatus)
  status: GroupStatus;
}

@ObjectType()
export class createGroupResponse {
    @Field()
    success: boolean;

    @Field()
    message: string;

    @Field(() => group) 
    group: group;
}