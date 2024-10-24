import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../types/user.type';
import { catchError, Observable, of, tap } from 'rxjs';
import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  apiUrl=environment.apiURL;
  register(user: User): Observable<User> {
    console.log(this.apiUrl)
    return this.http.post<User>(this.apiUrl + '/user', user).pipe(
      catchError((error) => {
        alert(error.message)
        return of()
      })
    )
  }

  login(credential: Pick<User, "email" | "password">): Observable<{accessToken: string}>{
    return this.http.post<{accessToken: string}>(this.apiUrl + '/user', credential).pipe(
      tap((res) => localStorage.setItem('token', res.accessToken)),
      tap(() => alert('Bienvenue !')),
      catchError((error) => {
        alert(error.message)
        return of()
      })
    )
  }

  getToken(): string | null {
    return localStorage.getItem('token')
  }
}
