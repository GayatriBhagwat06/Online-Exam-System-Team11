import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Register } from '../register';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  baseURL: string="http://localhost:8086/Myuser/register"
  constructor(private http:HttpClient) { 
    
  }
  public doRegistration(registration:Register):Observable<any>{
    return this.http.post(this.baseURL,registration)
  }


}
