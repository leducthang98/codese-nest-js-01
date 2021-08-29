import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { TeacherModule } from 'src/teacher/teacher.module';
import { DatabaseModule } from 'src/helper/database/database.module';
import { studentProviders } from './student.providers';

@Module({
  imports: [TeacherModule, DatabaseModule],
  controllers: [StudentController],
  providers: [
    ...studentProviders,
    StudentService
  ]
})
export class StudentModule { }
