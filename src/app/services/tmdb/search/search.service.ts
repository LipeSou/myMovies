import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError, type Observable } from 'rxjs';
import { tmdbGlobalVariables } from '../globalVariables/gobalVariables';
import { apiKeyTemporary } from '../apikeyTemporary';
import type { TmdbTrending } from '../../../types/TmdbTrending';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  language = "pt-BR"
  private url = tmdbGlobalVariables.endpoint
  
  constructor(private http: HttpClient) { }

  getSearch({query}: {query: string}) : Observable<TmdbTrending> {
    return this.http.get<TmdbTrending>(`${this.url}/search/multi`, {
        params: {
          "api_key": apiKeyTemporary,
          language: this.language,
          query
        }
      }    
    ).pipe(
      catchError((error: any) => {
        console.error('Erro ao buscar detalhes do filme:', error);
        return throwError(() => new Error(error));
      })
    );
  }
}
