import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Observable } from "rxjs";
import { Questions1 } from './Questions1';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
 
 
  

  baseURL:string ='http://localhost:8086/Myquestion/';
    constructor(private myhttp:HttpClient){}

    //add subid in this 
    getAllQuestionsService() {
        //return this.myhttp.get(this.baseURL+"/getQuestionByLevelSubjectID/"+ myexam+"/"+mylevel);
        return this.myhttp.get(this.baseURL+"getAllQuestion")
    }
   
    getAllQuestionsSLService(myexam,mylevel):Observable<Questions1[]>{
      return this.myhttp.get<Questions1[]>(this.baseURL+"getQuestionByLevelSubjectID/"+myexam+"/"+mylevel)
  }
    getAllquestionBySubjectIdService(myexam):Observable<Questions1[]>{
      return this.myhttp.get<Questions1[]>(this.baseURL+"getQuestionsBySubjectId/"+myexam)
    }
}
