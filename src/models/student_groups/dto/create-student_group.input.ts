import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateStudentGroupInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
