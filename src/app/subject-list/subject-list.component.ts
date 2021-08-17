import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {

 
  s1:number;
  l1:number;
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  startTest(subjectNumber:number){
    sessionStorage.setItem("subjectId",String(subjectNumber));
    this.s1=parseInt(sessionStorage.getItem("subjectId"));
    console.log(this.s1);

    sessionStorage.setItem("levelId",String(1));
    this.l1=parseInt(sessionStorage.getItem("levelId"));
    console.log(this.l1);



    this.router.navigate(['instructions']);
  }

}


