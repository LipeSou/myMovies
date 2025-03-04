import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

interface LoginResponse {
  access_token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<LoginResponse> {
    const body = { email, password };
    return this.http.post<LoginResponse>(`${this.API_URL}/auth/login`, body);
  }

  // Armazena o token no localStorage (ou sessionStorage)
  setToken(token: string): void {
    localStorage.setItem('access_token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  // Apenas um exemplo de função para remover o token do localStorage
  logout(): void {
    localStorage.removeItem('access_token');
  }

  // Verifica de forma simples se existe token (e.g. para *ngIf="isLoggedIn()")
  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
