import { tmdbGlobalVariables } from './../globalVariables/gobalVariables';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tmdb } from '../../../types/Tmdb';
import { TmdbList } from '../../../types/TmdbList';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  private url = tmdbGlobalVariables.endpoint

  constructor(private http: HttpClient) { }

  getTmdbMovie() : Observable<Tmdb>{
    return this.http.get<Tmdb>(`${this.url}/3/movie/15?api_key=d5cf27f9ea9d20ec45b1f08479ce34e8&language=pt-BR'`)
  }

  getAllTmdbMovies(): Observable<TmdbList>{
    return this.http.get<TmdbList>(`${this.url}/discover/movie?api_key=d5cf27f9ea9d20ec45b1f08479ce34e8&include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc'`, {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWNmMjdmOWVhOWQyMGVjNDViMWYwODQ3OWNlMzRlOCIsIm5iZiI6MTcyMjgwODgyNi44ODI5MzgsInN1YiI6IjY2MDM2OTM1MWIxZjNjMDE3YzlkZWMyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NRR3qFNWq1NgCkgDVFENGXOE1WUNqsJ18QzPwi7D1Qg'
      }
    })
  }
}
