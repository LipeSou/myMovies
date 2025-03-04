import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import type { Watchlist } from '../../../types/Watchlists';

@Injectable({
  providedIn: 'root',
})
export class WatchlistService {
  private apiUrl = 'http://localhost:3000/watchlist';

  constructor(private http: HttpClient) {}

  getWatchlistsByUser(userId: string): Observable<Watchlist[]> {
    return this.http.get<Watchlist[]>(`${this.apiUrl}/?userId=${userId}`);
  }
}
