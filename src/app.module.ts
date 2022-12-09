import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Tutorial } from './tutorial/entity/tutorial.entity';
import { TutorialModule } from './tutorial/tutorial.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port: 3306,
      username:'root',
      password:'',
      database:'testdb',
      entities:[Tutorial],
      synchronize:true,
    }),
    TutorialModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
