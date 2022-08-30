import { Injectable } from '@nestjs/common';
import { Anime } from './models/anime';

@Injectable()
export class AnimesService {
  async findOneById(id: string): Promise<Anime> {
    const anime = new Anime()
    anime.id = '1'
    anime.title = '呪術廻戦'

    return anime

  }
}
