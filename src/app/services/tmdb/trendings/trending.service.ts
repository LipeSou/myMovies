import { Injectable } from '@angular/core';
import { tmdbGlobalVariables } from '../globalVariables/gobalVariables';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiKeyTemporary } from '../apikeyTemporary';
import type { TmdbTrending } from '../../../types/TmdbTrending';

export enum Type {
  ALL = "all",
  MOVIES = "movies",
  TV = "tv"
}

export enum Time {
  DAY = "day",
  WEEK = 'week'
}

interface GetTrendingMoviesService {
  type:  Type,
  time: Time
 }

@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  private url = tmdbGlobalVariables.endpoint

  constructor(private http: HttpClient) { }
  
  getTrendingMovies(getTrendingMoviesService: GetTrendingMoviesService) : Observable<TmdbTrending>{
    return this.http.get<TmdbTrending>(`${this.url}/trending/${getTrendingMoviesService.type}/${getTrendingMoviesService.time}?api_key=${apiKeyTemporary}&language=pt-BR`)
  }
}
