import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { TutorialService } from './tutorial.service';
import { TutorialDto } from './dto/tutorial.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
@Controller()
export class TutorialController {
    constructor(private readonly tutorialService:TutorialService){}
    @UseGuards(JwtAuthGuard)
    @Get("/")
    findAllorTitle(@Query() query){
        return this.tutorialService.findAllorTitle(query.title);
    }
    @UseGuards(JwtAuthGuard)
    @Post("/")
    createTutorial(@Body() body){

        return this.tutorialService.create(body.title,body.description);
    }
}
