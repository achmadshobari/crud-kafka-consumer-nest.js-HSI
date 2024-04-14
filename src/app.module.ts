import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entity/siswa.entity';
import { ClassStudent } from './entity/kelas.entity';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [    
    TypeOrmModule.forRoot({
    type: 'mariadb',
    host: 'localhost',
    port:3306,
    username: 'root',
    password: '',
    database:'sandbox',
    entities: [ Student, ClassStudent],
    synchronize:true,
  }),
  TypeOrmModule.forFeature([Student, ClassStudent]),
  // ThrottlerModule.forRoot([{
  //   ttl: 60000,
  //   limit: 12,
  // }]),
],
  controllers: [AppController],
  providers: [AppService,
    // {
    //   provide: APP_GUARD,
    //   useClass: ThrottlerGuard,
    // }
    
  ],
})
export class AppModule {}
