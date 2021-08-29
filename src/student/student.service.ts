import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Student } from './entity/student.entity';


@Injectable()
export class StudentService {

  constructor(
    @Inject('STUDENT_REPOSITORY')
    private studentRepository: Repository<Student>,
  ) { }


  async findAll(): Promise<Student[]> {
    return this.studentRepository.query("Select * from student");
  }
}
