import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import {Student}  from "./siswa.entity";

@Entity()

export class ClassStudent{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    className : string;
    
    @OneToMany(() => Student, (student) => student.kelas)
    students:Student[];


}