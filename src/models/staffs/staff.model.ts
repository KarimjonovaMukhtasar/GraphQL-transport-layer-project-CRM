import { Field, ID, Int, ObjectType, registerEnumType } from "@nestjs/graphql";
import { role } from "@prisma/client";


registerEnumType(role, {
  name: 'Role',
  description: 'The staff member roles'
  
});

@ObjectType()
export class Staff {
  @Field(() => ID)
  id: string;

  @Field() 
  first_name: string;        

  @Field()
  last_name: string;

  @Field()
  username: string;

  @Field(() => role)
  role: role;

  @Field()
  position: string;

  @Field()
  phone: string;

  @Field()
  hire_date: string; 
}

@ObjectType()
export class staffRegisteredResponse{
    @Field()
    success: boolean

    @Field()
    message: string

    @Field()
    staff: Staff
}

@ObjectType()
export class staffGetResponse{
    @Field()
    success: boolean

    @Field(() => Int)
    count: number

    @Field(() => [Staff])
    staffs: [Staff]
}