import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from './modal/register';
import { HttpClient } from '@angular/common/http';
import { ThrowStmt, ThisReceiver } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  public registeredUser(registerUser: Register): Observable<any>{
    return this.http.post<any>("http://localhost:8080/products/register-user",registerUser)
  }
}
