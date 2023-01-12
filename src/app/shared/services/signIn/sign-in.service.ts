import { UserModel } from './../../../model/UserModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  private URL_API = 'http://localhost:8081/user';

  constructor(private http: HttpClient) {}

  login(user: string, password: string) {
    return this.http.get<UserModel>(this.URL_API + '/getByAuthori?user=' + user + '&password=' + password);
  }
}
