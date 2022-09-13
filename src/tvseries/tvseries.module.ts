import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TvSeriesController } from './tvseries.controller';
import { TvSeriesAppService } from './tvseries.service';

@Module({
  imports: [HttpModule.register({
    timeout: 5000,
    maxRedirects: 5,
  }),],
  controllers: [TvSeriesController],
  providers: [TvSeriesAppService],
})
export class TvSeriesModule {}
