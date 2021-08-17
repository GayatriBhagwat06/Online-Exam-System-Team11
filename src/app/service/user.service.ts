import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Myuser } from '../appmodel/Myuser';
import { Myquestion } from '../appmodel/Myques';
import { Myexam } from '../appmodel/Myexam';
import { Mylevel } from '../appmodel/Mylevel';
@Injectable({
  providedIn: 'root'
})
export class UserService {
baseURL:string='http://localhost:8086/Myadmin/';
constructor (private myhttp:HttpClient){}
  
  findAllUsersService(): Observable<Myuser[]>
  {
return  this.myhttp.get<Myuser[]>(this.baseURL+"getAllUserWithScore/");
  }
  findAllSubjectsService(): Observable<Myexam[]>
  {
return  this.myhttp.get<Myexam[]>(this.baseURL+"getAllSubjects/");
  }
  findAllQuestionsService(): Observable<Myquestion[]>
  {
return  this.myhttp.get<Myquestion[]>(this.baseURL+"getAllQuestions/");
  }
  findAllLevelsService(): Observable<Mylevel[]>
  {
return  this.myhttp.get<Mylevel[]>(this.baseURL+"getAllLevels/");
  }
  deleteQuestionService(qno:any): Observable<String>
  {
    return  this.myhttp.delete<String>(this.baseURL+"deleteQuestions/"+qno);
 
  }
  addNewQuestionService(levelId:any,subjectId:any,Myques:Myquestion): Observable<any>
  {
    console.log("reached at last");
    console.log(Myques);
    console.log(levelId);
    console.log(subjectId);
    return this.myhttp.post<any>(this.baseURL+"addQuestions/"+levelId+"/"+subjectId, Myques);
   
  }
  findAllUsersServiceByExam(tech:String): Observable<any>
  {
return  this.myhttp.get<any>(this.baseURL+"getAllUserWithTech/");
  }
  
}
