import { HttpException, Injectable } from '@nestjs/common';
import { AxiosPromise } from 'axios';

@Injectable()
export class TvSeriesAppService {

  fetchSeries(http,params): Promise<AxiosPromise<any>> {
    const response = http
      .get('https://videocdn.tv/api/tv-series', {
        params: {
          api_token: 'B5uo8dEjeuhThOlS2kA56LTJCqJqvykl',
          query: params?.search ? params.search : '',
          ordering :  'released', 
          direction	: params?.filmDirection ? params.filmDirection : 'desc',
          field	: 'title',// 'imdb_id', 'kinopoisk_id',
          year  : params?.filmYear ? params.filmYear : null,
          page	: params?.page ? params.page : 1,
          limit	: params?.filmLimit ? params.filmLimit : 10,
        },
      })
      .toPromise()
      .then((res) => res.data.data)
      .catch((err) => {
        console.log(err);
        throw new HttpException(
          { stack: { errMsg: 'Возникла ошибка при получении данных' } },
          err.response?.status,
        );
      });
 
    return response;
  }

  // fetchKinopoiskData(http, id): Promise<AxiosPromise<any>> {
  //   const res = http
  //     .get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
  //       method: 'GET',
  //       headers: {
  //         'X-API-KEY': '779118fd-fd49-4cea-bdc2-6f249ccfd3fe',
  //         'Content-Type': 'application/json',
  //       },
  //     })
  //     .toPromise()
  //     .then(res => res.data)
  //     .catch((err) => {
  //       // console.log(err);
  //     });
  //   return res;
  // }

}
