import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from "@angular/http";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { T3UsersLogin } from './user.model';
import { query } from '@angular/animations';

@Injectable()
export class UserService {
  readonly rootUrl = 'http://localhost:3081';
  constructor(private http: HttpClient) {
    
   }
  registerUser(user: T3UsersLogin) {
       var reqHeader = new HttpHeaders({'Content-Type': 'application/json'});
    console.log(user);
    return this.http.post(this.rootUrl + '/api/user/Post', user,{headers : reqHeader});
  }

  userActive(username: string, keyString: string) {
    var reqHeader = new HttpHeaders({'Content-Type': 'application/json'});
    let body ={username, keyString}
    return this.http.post(this.rootUrl + '/api/user/userActive', body,{headers : reqHeader});
}

  updateUser(user: T3UsersLogin) {
    var sql: Query =
    {
      query: "Update [User] set Email ='" + "', LastName =N'" + user.LastName + "', FirstName =N'" + user.FirstName + "', PhoneNumber ='" + user.PhoneNumber +"' where UserName ='" +  user.UserName +"'"
    } 
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
    return  this.http.post(this.rootUrl+'/api/SqlServer/ExecSQL', sql, { headers: reqHeader });
  }

  userAuthentication(userName, password) {
    var data = "username=" + userName + "&password=" + password + "&grant_type=password";
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
    return this.http.post(this.rootUrl + '/token', data, { headers: reqHeader });
  }

  getUserClaims(){
   return  this.http.get(this.rootUrl+'/api/GetUserClaims');
  }

  getListUsers(){
    let data: Query = {
      query: "select * from [User]"
    }
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
    return  this.http.post(this.rootUrl+'/api/SqlServer/ReturnDataTable/', data, { headers: reqHeader });
   }

   getUser(id: string){
    let data: Query = {
      query: "select * from [User] where UserName ='" + id + "'"
    }
    
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
    return  this.http.post(this.rootUrl+'/api/SqlServer/ReturnDataTable/', data, { headers: reqHeader });
   }

   addUser(ssQL: string){
    let data: Query = {
      query: ssQL
    }
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
    return  this.http.post(this.rootUrl+'/api/SqlServer/ExecSQL', data, { headers: reqHeader });
   }
}
export  class Query
{
    public  query:string;
}


export class Email
{
    public  MailFrom:string;
    public  MailTo:string;
    public  Subject:string;
    public  Body:string;
}
