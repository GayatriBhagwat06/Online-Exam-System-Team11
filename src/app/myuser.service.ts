import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Myuser } from './Myuser';

@Injectable({
  providedIn: 'root'
})
export class MyuserService {

 
  baseURL : String = "http://localhost:8086/Myuser/";

  constructor(private myhttp : HttpClient) { }

  findMyuserByEmailService(email : string) : Observable <Myuser>{
    return this.myhttp.get<Myuser>(this.baseURL+"getUserByEmail/"+email);
  }
}
