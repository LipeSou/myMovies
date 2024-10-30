import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { tmdbGlobalVariables } from '../globalVariables/gobalVariables';
import { apiKeyTemporary } from '../apikeyTemporary';


@Injectable({
  providedIn: 'root'
})
export class MovieDetailsService {

  private url = tmdbGlobalVariables.endpoint

  constructor(private http: HttpClient) { }
  
  getMovie({movieId} : { movieId: number}) : Observable<any>{
    return this.http.get<any>(`${this.url}/movie/${movieId}?api_key=${apiKeyTemporary}`)
    .pipe(
      catchError((error: any) => {
        console.error('Erro ao buscar detalhes do filme:', error);
        return throwError(() => new Error(error));
      })
    );
  }
}
