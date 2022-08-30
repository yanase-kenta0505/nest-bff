import { Module } from '@nestjs/common';
import { AnimesResolver } from './animes.resolver';
import { AnimesService } from './animes.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';


@Module({
  providers: [AnimesResolver, AnimesService],
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql'
    })
  ]
})
export class AnimesModule {}
