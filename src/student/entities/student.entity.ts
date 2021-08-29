export class Student {
    name: string;
    age: number;
    isDeleted: boolean;

    constructor(name: string, age: number, isDeleted: boolean) {
        this.name = name;
        this.age = age;
        this.isDeleted = isDeleted;
    }
}
