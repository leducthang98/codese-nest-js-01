import { Student } from "../entities/student.entity";

export class StudentResourceResponse {
    name: string;
    age: number;

    constructor(entity: Student) {
        this.name = entity.name;
        this.age = entity.age;
    }

    toEntity() {
        return new Student(this.name, this.age, null);
    }
}