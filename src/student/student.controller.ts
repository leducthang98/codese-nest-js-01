import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentService } from './student.service';
import { TeacherService } from 'src/teacher/teacher.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService, private readonly teacherService: TeacherService) { }

  @Get()
  async findAll() {
    return this.studentService.findAll()
  }

}
