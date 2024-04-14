import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { fromEventPattern } from 'rxjs';
import { EventPattern, Payload } from '@nestjs/microservices';
import { Student } from './entity/siswa.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  
  // @EventPattern('order_created')
  // handleOrderCreated(data:any){
  //   this.appService.handleOrderCreated(data);
  // }

  @EventPattern('order_created')
  async createStudent(data:any): Promise<Student> {
    return await this.appService.createStudent(data);
  }

  // @EventPattern('update_created')
  // async updateStudent(@Payload() data:any){
  //   return await this.appService.updateStudent(id, studentData);
  // }

    // //update student
    // async updateStudent(id:number, studentData:Partial<Student>):Promise<Student | null>{
    //   await this.classstudentRepository.update(id, studentData);
    //   return this.getStudentById(id); 
    // }
  
    @EventPattern('delete_created')
    async deleteStudent(data:any): Promise<void> {
      return await this.appService.deleteStudent(data);
    }

}
