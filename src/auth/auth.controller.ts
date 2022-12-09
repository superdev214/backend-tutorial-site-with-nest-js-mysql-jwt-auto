import { Controller, Post, Request, UseGuards, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { AuthGuard } from '@nestjs/passport';
@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}
@UseGuards(AuthGuard('local'))
  @Post('/login')
  login(@Body() body:AuthDto) {
    console.log();
    return this.authService.login(body);
  }
}
