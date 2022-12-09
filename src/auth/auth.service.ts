import { Injectable } from '@nestjs/common';

 import { JwtService } from '@nestjs/jwt';
 import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
     private userService: UserService,
     private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.getByEmail(email);
    console.log(user);
    if (user && user.password === password) {
      return 'Login successful';
    }
    return null;
  }

  async login(user: any) {
 
    const payload = { email: user.name, sub: user.password };
    return {
      token: this.jwtService.sign(payload),
      msg:"success",
    };
  }
}