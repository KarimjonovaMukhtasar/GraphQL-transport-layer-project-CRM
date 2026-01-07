import { Injectable } from '@nestjs/common';
import { CreateStudentGroupInput } from './dto/create-student_group.input';
import { UpdateStudentGroupInput } from './dto/update-student_group.input';

@Injectable()
export class StudentGroupsService {
  create(createStudentGroupInput: CreateStudentGroupInput) {
    return 'This action adds a new studentGroup';
  }

  findAll() {
    return `This action returns all studentGroups`;
  }

  findOne(id: number) {
    return `This action returns a #${id} studentGroup`;
  }

  update(id: number, updateStudentGroupInput: UpdateStudentGroupInput) {
    return `This action updates a #${id} studentGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} studentGroup`;
  }
}
