import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(body): Promise<any> {
    const result = await this.userRepository.save(body);
    return {
      result,
      msg: 'success',
    };
  }
  async getByEmail(email: string): Promise<any> {
    const result = await this.userRepository.findOne({ where: { email } });
    return result;
  }
}
