import { Connection } from 'typeorm';
import { Student } from './entity/student.entity';

export const studentProviders = [
    {
        provide: 'STUDENT_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(Student),
        inject: ['DATABASE_CONNECTION'],
    },
];