import { HttpService } from '@nestjs/axios';
import { Controller, Post, HttpException, Body } from '@nestjs/common';
import { AxiosPromise, AxiosResponse } from 'axios';
import { Observable } from 'rxjs/internal/Observable';
import { TvSeriesAppService } from './tvseries.service';

@Controller('fetchTvseries')
export class TvSeriesController {
  constructor(
    private readonly appService: TvSeriesAppService,
    private httpService: HttpService,
  ) {}

  @Post('data')
  async fetchSeries(@Body() params): Promise<any> {
    let movieData;
    console.log(this)
    const response = await this.appService.fetchSeries(this.httpService,params);
    movieData = response;
    // if (movieData.length > 0) {
    //   for (let i = 0; i < movieData.length; i++) {
    //     const res2 = await this.appService.fetchKinopoiskData(
    //       this.httpService,
    //       movieData[i].kinopoisk_id,
    //     );
    //     movieData[i].data = res2;
    //     movieData[i] = { ...movieData[i], ...movieData[i].data };
    //   }
    // }
    return movieData;
  }
}
