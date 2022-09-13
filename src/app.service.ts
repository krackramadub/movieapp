// import { HttpException, Injectable } from '@nestjs/common';
// import { AxiosPromise } from 'axios';
// 
// @Injectable()
// export class AppService {
// 
//   fetchMovie(http,count): Promise<AxiosPromise<any>> {
//     const response = http
//       .get('https://videocdn.tv/api/movies', {
//         params: {
//           api_token: 'B5uo8dEjeuhThOlS2kA56LTJCqJqvykl',
//           limit: count,
//         },
//       })
//       .toPromise()
//       .then((res) => res.data.data)
//       .catch((err) => {
//         console.log(err);
//         throw new HttpException(
//           { stack: { errMsg: 'Возникла ошибка при получении данных' } },
//           err.response?.status,
//         );
//       });
// 
//     return response;
//   }
// 
//   fetchKinopoiskData(http, id): Promise<AxiosPromise<any>> {
//     const res = http
//       .get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
//         method: 'GET',
//         headers: {
//           'X-API-KEY': '779118fd-fd49-4cea-bdc2-6f249ccfd3fe',
//           'Content-Type': 'application/json',
//         },
//       })
//       .toPromise()
//       .then(res => res.data)
//       .catch((err) => {
//         console.log(err);
//       });
//     return res;
//   }
// 
// }
