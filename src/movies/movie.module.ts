import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MovieController } from './movie.controller';
import { MovieAppService } from './movie.service';

@Module({
  imports: [HttpModule.register({
    timeout: 5000,
    maxRedirects: 5,
  }),],
  controllers: [MovieController],
  providers: [MovieAppService],
})
export class MovieModule {}
