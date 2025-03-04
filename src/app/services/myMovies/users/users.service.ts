import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import type { SearchUserResponse } from '../../../types/Users';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = 'http://localhost:3000/users'

  constructor(private http: HttpClient) { }

  createUser(data: { name: string; email: string; password: string }): Observable<any> {
    return this.http.post(this.url, data);
  }

  searchUser(data: {name?: string; id?: string}): Observable<SearchUserResponse[]> {
    let params = new HttpParams();

    if(data.name){
      params = params.set('name', data.name)
    }

    if(data.id){
      params = params.set('id', data.id)
    }

    return this.http.get<SearchUserResponse[]>(`${this.url}/search`, {params})
  }

  // loginUser(data: {email: string, password: string}): Observable<any> {
  //   return this.http.get(this.url)
  // }
}
