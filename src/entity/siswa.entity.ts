import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import {ClassStudent}  from "./kelas.entity";

@Entity()
export class Student{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;

    @Column()
    email: string;

    @ManyToOne(() => ClassStudent, (classstudent) => classstudent.students)
    kelas:ClassStudent;
    
}