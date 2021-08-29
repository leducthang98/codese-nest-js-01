import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    StudentModule,
    TeacherModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'codedidungso.me',
      port: 4306,
      username: 'root',
      password: 'tu1den6',
      database: 'thangld',
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
