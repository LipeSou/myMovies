import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { tmdbGlobalVariables } from '../globalVariables/gobalVariables';
import { apiKeyTemporary } from '../apikeyTemporary';
import type { TmdbTvDetails } from '../../../types/TmdbTvDetails';
import type { MovieProvider } from '../../../types/MovieProvider';


@Injectable({
  providedIn: 'root'
})
export class TvDetailsService {

  private url = tmdbGlobalVariables.endpoint

  constructor(private http: HttpClient) { }
  
  getTv({tvId} : { tvId: number}) : Observable<TmdbTvDetails>{
    return this.http.get<TmdbTvDetails>(`${this.url}/tv/${tvId}?api_key=${apiKeyTemporary}&language=pt-BR`)
    .pipe(
      catchError((error: any) => {
        console.error('Erro ao buscar detalhes da série:', error);
        return throwError(() => new Error(error));
      })
    );
  }
  // busca quais streamings estao disponiveis para assistir
  getTvProviders({movieId} : { movieId: number}) : Observable<MovieProvider>{
    return this.http.get<MovieProvider>(`${this.url}/tv/${movieId}/watch/providers?api_key=${apiKeyTemporary}&language=pt-BR`)
    .pipe(
      catchError((error: any) => {
        console.error('Erro ao buscar detalhes do filme:', error);
        return throwError(() => new Error(error));
      })
    );
  }
}
