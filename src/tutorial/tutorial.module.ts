import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { Tutorial } from './entity/tutorial.entity';
import { TutorialService } from './tutorial.service';
import { TutorialController } from './tutorial.controller';

@Module({
    imports:[TypeOrmModule.forFeature([Tutorial])],
    providers: [TutorialService],
    controllers: [TutorialController],
})
export class TutorialModule {}
