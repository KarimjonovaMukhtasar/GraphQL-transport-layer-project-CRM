import { CreateStudentGroupInput } from './create-student_group.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateStudentGroupInput extends PartialType(CreateStudentGroupInput) {
  @Field(() => Int)
  id: number;
}
