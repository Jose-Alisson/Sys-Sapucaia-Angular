import { UserModel } from './../../../model/UserModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private user!: UserModel;

  constructor(private http: HttpClient) {}

  public setUser(user:UserModel){
    this.user = user;
  }

  public reloaUser(){

  }

  public getUser(){
    return this.user;
  }
}
