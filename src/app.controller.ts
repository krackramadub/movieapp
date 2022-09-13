// import { HttpService } from '@nestjs/axios';
// import { Controller, Get, HttpException, Param } from '@nestjs/common';
// import { AxiosPromise, AxiosResponse } from 'axios';
// import { Observable } from 'rxjs/internal/Observable';
// import { AppService } from './app.service';
// 
// @Controller('fetchMovie')
// export class AppController {
//   constructor(
//     private readonly appService: AppService,
//     private httpService: HttpService,
//   ) {}
// 
//   @Get('data/:count')
//   async fetchMovie(@Param() params): Promise<any> {
//     let movieData;
//     console.log(params)
//     const response = await this.appService.fetchMovie(this.httpService,params.count);
//     movieData = response;
//     if (movieData.length > 0) {
//       for (let i = 0; i < movieData.length; i++) {
//         const res2 = await this.appService.fetchKinopoiskData(
//           this.httpService,
//           movieData[i].kinopoisk_id,
//         );
//         movieData[i].data = res2;
//         movieData[i] = { ...movieData[i], ...movieData[i].data };
//       }
//     }
//     return movieData;
//   }
// }
