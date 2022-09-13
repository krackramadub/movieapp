import { HttpException, Injectable } from '@nestjs/common';
import { AxiosPromise } from 'axios';
import { config } from '../config'
@Injectable()
export class MovieAppService {

  fetchMovie(http,params): Promise<AxiosPromise<any>> {
    // console.log('movie.service params:',[params])
    const response = http
      .get('https://videocdn.tv/api/movies', {
        params: {
          api_token: config.api_key_videocdn, //'B5uo8dEjeuhThOlS2kA56LTJCqJqvykl',
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

  fetchKinopoiskData(http, id): Promise<AxiosPromise<any>> {
    const res = http
      .get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
        method: 'GET',
        headers: {
          'X-API-KEY': config.api_key_kinopoisk,
          'Content-Type': 'application/json',
        },
      })
      .toPromise()
      .then(res => res.data)
      .catch((err) => {
        console.log(err);
      });
    return res;
  }

}
