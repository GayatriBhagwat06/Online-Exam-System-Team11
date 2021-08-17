import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { myscore } from './myscore';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private myhttp:HttpClient) { }
  baseURL:string ='http://localhost:8086/Myscore/';


  getReportService(userId:number):Observable<myscore[]>{
    return this.myhttp.get<myscore[]>(this.baseURL+"getReports/"+userId);
  }
  // setScoreService(Myscore:myscore,userId:number,subjectId:number):Observable<any>{
  //   return this.myhttp.post<any>(this.baseURL+"addScore/"+userId+"/"+subjectId,Myscore);
  // }
}
