import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Myadmin } from '../appmodel/Myadmin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  baseURL : String = "http://localhost:8086/Myadmin/";

  constructor(private myhttp : HttpClient) { }

  findMyadminByEmailService(email : string) : Observable <Myadmin>{
    return this.myhttp.get<Myadmin>(this.baseURL+"getAdminByEmail/"+email);
  }

}

