import { Resolver, Args, Query } from '@nestjs/graphql';
import { AnimesService } from './animes.service'
import { Anime } from './models/anime';

@Resolver(of => Anime)
export class AnimesResolver {
  constructor(private readonly animesService: AnimesService) {}

  @Query(returns => Anime)
  async anime(@Args('id') id: string): Promise<Anime> {
    return await this.animesService.findOneById(id)
  } 

}
