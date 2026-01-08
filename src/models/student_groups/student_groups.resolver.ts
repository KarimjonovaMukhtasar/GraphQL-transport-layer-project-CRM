import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StudentGroupsService } from './student_groups.service';
import { StudentGroup } from './entities/student_group.entity';
import { CreateStudentGroupInput } from './dto/create-student_group.input';
import { UpdateStudentGroupInput } from './dto/update-student_group.input';

@Resolver(() => StudentGroup)
export class StudentGroupsResolver {
  constructor(private readonly studentGroupsService: StudentGroupsService) {}

  @Mutation(() => StudentGroup)
  createStudentGroup(@Args('createStudentGroupInput') createStudentGroupInput: CreateStudentGroupInput) {
    return this.studentGroupsService.create(createStudentGroupInput);
  }

  @Query(() => [StudentGroup], { name: 'studentGroups' })
  findAll() {
    return this.studentGroupsService.findAll();
  }

  @Query(() => StudentGroup, { name: 'studentGroup' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.studentGroupsService.findOne(id);
  }

  @Mutation(() => StudentGroup)
  updateStudentGroup(@Args('updateStudentGroupInput') updateStudentGroupInput: UpdateStudentGroupInput) {
    return this.studentGroupsService.update(updateStudentGroupInput.id, updateStudentGroupInput);
  }

  @Mutation(() => StudentGroup)
  removeStudentGroup(@Args('id', { type: () => Int }) id: number) {
    return this.studentGroupsService.remove(id);
  }
}
