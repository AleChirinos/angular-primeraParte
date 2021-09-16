import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {

  url ="https://data-test2-b1af6-default-rtdb.firebaseio.com/";
  key = "AIzaSyBtzO81wi6z-rFWfSJbLHMLzpy4IOJY8G8";

  constructor(private http: HttpClient, private router: Router) {}

  public login(body: any): Observable<any>{
    return this.http.post(`${this.url}/v1/accounts:signInWithPassword?key=${this.key}`, body).pipe(
      map((res: any) => {
        this.authSuccess(res.idToken, res.localId);
        return 'Authentication Succed';
      })
    );
  }

  private authSuccess(token: string, userId: string): void {
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public getUserId(): string {
    return localStorage.getItem('userId');
  }

  public verifyLogged(): boolean {
    return !!this.getToken();
  }

  public logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this.router.navigate(['login']);
  }

}