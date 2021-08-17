import { ParsedEvent } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-result',
  templateUrl: './show-result.component.html',
  styleUrls: ['./show-result.component.css']
})
export class ShowResultComponent implements OnInit {

  constructor(public router:Router) { }

  examResult:number;
  newLevel:number;

  ngOnInit(): void {

    this.examResult=parseInt(sessionStorage.getItem("userMarks"));
    this.newLevel=parseInt(sessionStorage.getItem("levelId"));
    console.log("ngoninit")

    
  }
  goToNextLevel(){
    console.log("go to next level");
    this.newLevel=this.newLevel+1;
    sessionStorage.setItem("levelId",String(this.newLevel));
    this.router.navigate(['showQuestion']);
    console.log("going to");



  }

  

}
