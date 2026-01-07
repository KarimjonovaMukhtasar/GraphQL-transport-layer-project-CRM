import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class StudentGroup {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
