import { Component, OnInit } from '@angular/core';
import { Myquestion } from '../appmodel/Myques';
import {Myexam} from '../appmodel/Myexam';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-admin-manage-questions',
  templateUrl: './admin-manage-questions.component.html',
  styleUrls: ['./admin-manage-questions.component.css']
})
export class AdminManageQuestionsComponent implements OnInit {

  xdata:any;deleted: Boolean=false;
  allQuestion:Myquestion[]=[];
  tempQuestion:Myquestion[]=[];subId;levId;question;Opt1;Opt2;Opt3;Opt4;ans;
  allExam:Myexam[]=[];
  tempExam:Myexam[]=[];
levelId:any;
subjectId;
examId:any;

  newQuestion:Myquestion=new Myquestion();
  constructor(private userService:UserService) { }
  ngOnInit(): void {
    console.log('ngOnInit called....');
    this.loadAllQuestions(); 
    // this.loadAllSubjects();
   
  
  }
 



  loadAllQuestions() {
    console.log('Load all questions');
    this.userService.findAllQuestionsService().subscribe(
      (data: Myquestion[])=> 
      {
        this.allQuestion = data;
        this.tempQuestion = this.allQuestion; //copied into a temp array also
      
      }, 
      (err) => {
        console.log(err);
      }
    ); // invocation of the subscribe method
  }
 
 deleteQuestions(qno: any) 
  {
    
    console.log('question number to delete '+qno);
    this.userService.deleteQuestionService(qno).
    subscribe((data:any) =>
    {
       this.xdata = data;
      console.log('log is' + data);
        if(data == null ) {
          this.deleted=true;
         // alert('record has been deleted');
          this.tempQuestion = this.allQuestion.filter(e=>(e.questionId != qno));

          console.log('from deleteEmployee() '+ data); 
                    console.log(this.tempQuestion);
          this.allQuestion = this.tempQuestion;
          console.log('Question deleted '+qno);
        }
      }, (err) => { 
          console.log(err + ' error '+this.xdata);
      });
     // if(this.deleted) {
        
      //}
      //this.loadAllEmployees();
      //window.location.reload();
    } //end of delete
    addquestion(){
      //this.newQuestion=new Myquestion;
      console.log(this.newQuestion);
      console.log(this.levelId);
      console.log(this.subjectId);
      
      this.userService.addNewQuestionService(this.levelId,this.subjectId,this.newQuestion).subscribe
      (data=>console.log("success"),
      error=>{
        console.log("error occured")
      }
      
      );
      
       // invocation of the subscribe method
      window.location.reload();
    }
  /*  loadAllSubjects() {
      console.log('Load all employees');
      this.userService.findAllSubjectsService().subscribe(
        (data: Myexam[])=> 
        {
          this.allExam = data;
          this.tempExam = data; //copied into a temp array also
        }, 
        (err) => {
          console.log(err);
        }
      ); // invocation of the subscribe method
    }*/
}
