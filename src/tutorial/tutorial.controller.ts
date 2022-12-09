import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { TutorialService } from './tutorial.service';
import { TutorialDto } from './dto/tutorial.dto';
@Controller()
export class TutorialController {
    constructor(private readonly tutorialService:TutorialService){}

    @Get("/")
    findAllorTitle(@Query() query){
        return this.tutorialService.findAllorTitle(query.title);
    }

    @Post("/")
    createTutorial(@Body() body){

        return this.tutorialService.create(body.title,body.description);
    }
}
