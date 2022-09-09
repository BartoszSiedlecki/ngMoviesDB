import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { APIResponse, Movie } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getMovieList(
    ordering: string,
    search?: string,
  ): Observable<APIResponse<Movie>>{
    let params = new HttpParams().set('sort', ordering);

    if(search){
      params = new HttpParams().set('ordering', ordering).set('search', search);
    }

    return this.http.get<APIResponse<Movie>>(`${env.BASE_URL}/movies`, {
      params: params,
    });
  }

  getMovieDetails(id: string): Observable<Movie>{
    const movieInfoRequest = this.http.get(`${env.BASE_URL}/movie/${id}`);

    return forkJoin({
      movieInfoRequest,
    }).pipe(
      map((resp: any) =>{
        return resp['movieInfoRequest'].result;
      })
    );
  }

  
}
