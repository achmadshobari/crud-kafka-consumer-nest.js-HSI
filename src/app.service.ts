import { Injectable } from '@nestjs/common';
import { OrderCreatedEvent } from './order-created.event';
import { Student } from './entity/siswa.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Student)  
    private readonly classstudentRepository:Repository<Student>
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async createStudent(studentData:Partial<Student>):Promise<Student>{
    const classStudent = this.classstudentRepository.create(studentData);
    console.log(studentData);
    return await this.classstudentRepository.save(classStudent);
  }

  // async getAllStudent(): Promise<Student[]>{
  //   return await this.classstudentRepository.find();
  // } 

  // update student
  // async updateStudent(id:number, studentData:Partial<Student>):Promise<Student | null>{
                                       
  //   await this.classstudentRepository.update(id, studentData);
  //   return this.getStudentById(id); 
  // }

  //update student
  // async updateStudent(id:number, studentData:Partial<Student>):Promise<Student | null>{
  //   await this.classstudentRepository.update(id, studentData);
  //   return this.getStudentById(id); 
  // }

    //get student by id
    async getStudentById(id: number): Promise<Student |null>{
      console.log(id);
      return await this.classstudentRepository.findOne({
        where:[{id}],
      });
    }

  //delete student
  async deleteStudent(id: number): Promise<void>{
    await this.classstudentRepository.delete(id);
  }

    

}