import { HttpService } from '@nestjs/axios';
import { Controller, Get, Post, HttpException, Body } from '@nestjs/common';
import { AxiosPromise, AxiosResponse } from 'axios';
import { Observable } from 'rxjs/internal/Observable';
import { MovieAppService } from './movie.service';

@Controller('fetchMovie')
export class MovieController {
  constructor(
    private readonly appService: MovieAppService,
    private httpService: HttpService,
  ) {}

  @Post('data')
  async fetchMovie(@Body() params): Promise<any> {
    let movieData;
    const response = await this.appService.fetchMovie(this.httpService,params);
    movieData = response;
    if (movieData.length > 0) {
      for (let i = 0; i < movieData.length; i++) {
        const res2 = await this.appService.fetchKinopoiskData(
          this.httpService,
          movieData[i].kinopoisk_id,
        );
        movieData[i].data = res2;
        movieData[i] = { ...movieData[i], ...movieData[i].data };
      }
    }
    return movieData;
  }
}
