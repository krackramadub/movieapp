import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
// import { MovieController } from './movies/movie.controller';
import { MovieModule } from './movies/movie.module';
import {TvSeriesModule} from './tvseries/tvseries.module'
// import { TvSeriesController } from './tvseries/tvseries.controller';
// import { TvSeriesAppService } from './tvseries/tvseries.service';
@Module({
  imports: [
    TvSeriesModule,
    MovieModule,
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
