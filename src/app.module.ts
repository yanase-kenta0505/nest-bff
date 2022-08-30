import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { AnimesModule } from './animes/animes.module';

@Module({
  imports: [TodoModule, AnimesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
