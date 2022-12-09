import { Injectable } from '@nestjs/common';
import { Tutorial } from './entity/tutorial.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class TutorialService {
  constructor(
    @InjectRepository(Tutorial)
    private tutorialRepository: Repository<Tutorial>,
  ) {}

  async create(title: string, description: string): Promise<any> {
    const mTemp = {
      title: title,
      description: description,
    };
    try {
      const result = await this.tutorialRepository.save({
        title: title.toLocaleLowerCase(),
        description: description,
      });
      return {
        ...result,
        msg: 'success',
      };
    } catch(err) {return err;}
  }

  async findAllorTitle(title?: string) {
    if (title === '' || title === undefined) {
      const mTemp = await this.tutorialRepository.find();
      return mTemp;
    } else {
      const mTemp = await this.tutorialRepository.find({
        where: { title },
      });
      return mTemp;
    }
  }
}
