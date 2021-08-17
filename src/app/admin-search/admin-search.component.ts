import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Myexam } from '../appmodel/Myexam';
import { Myuser } from '../appmodel/Myuser';
import { UserService } from '../service/user.service';
import { Mylevel } from '../appmodel/Mylevel';
@Component({
  selector: 'app-admin-search',
  templateUrl: './admin-search.component.html',
  styleUrls: ['./admin-search.component.css']
})

export class AdminSearchComponent implements OnInit {

 userId: any;
level:any;
exam:any;
selectedtech:any;
  allUsers: Myuser[] = [] ; // global variable available to all other methods + html
  tempUsers: Myuser[] =[] ; // global variable available to all other methods + html
 allExam:Myexam[]=[];
 tempExam:Myexam[]=[];
 allLevel: Mylevel[] = [] ;
 tempLevel: Mylevel[] = [] ;
 newlevel:Mylevel = new Mylevel();
  xdata: any;
  constructor(private userService:UserService,public router:Router ) { }

  ngOnInit(): void {
    console.log('ngOnInit called....');
 this.loadAllUsers();this.loadAllLevel();
    this.loadAllSubjects();
 
  } //end of ngOnInit
  loadAllUsers() {
    console.log('Load all employees');
    this.userService.findAllUsersService().subscribe(
      (data: Myuser[])=> 
      {
        this.tempUsers = data; 
        this.allUsers = this.tempUsers;
       //copied into a temp array also
      }, 
      (err) => {
        console.log(err);
      }
    ); // invocation of the subscribe method
  }
  loadAllSubjects() {
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
  }
  loadAllLevel() {
    console.log('Load all employees');
    this.userService.findAllLevelsService().subscribe(
      (data: Mylevel[])=> 
      {
        this.allLevel = data;
        this.tempLevel = data; //copied into a temp array also
      }, 
      (err) => {
        console.log(err);
      }
    ); // invocation of the subscribe method
  }

  updateUserArray() {
    if(this.userId == 0 ) {
      console.log('its zero' + this. userId);
      this.tempUsers = this.allUsers;
    }
    else {
      console.log('its NOT zero' + this. userId);
      this.tempUsers = this.allUsers.filter(e=>(e. myuser.userId == this. userId));
      console.log('length of tempUsers : '+this.tempUsers.length);
      console.log('length of allUsers  : '+this.allUsers.length);
    }
  }
  selectbyExam(){

    console.log(this.level);
    console.log(this.selectedtech);
      this.tempUsers = this.allUsers.filter(e=>((e.myexam.subjectId ==this.selectedtech)));
      if(this.level == 3 ) {
        console.log('its NOT zero' + this.level);
        this.tempUsers = this.tempUsers.filter(e=>(e.l3Score >=60));
        console.log('length of tempUsers : '+this.tempUsers.length);
        console.log('length of allUsers  : '+this.allUsers.length);
      }
      else if(this.level == 1 ) {
        console.log('its NOT zero' + this. level);
        this.tempUsers = this.tempUsers.filter(e=>(e.l1Score >=60 && e.l2Score<60));
        console.log('length of tempUsers : '+this.tempUsers.length);
        console.log('length of allUsers  : '+this.allUsers.length);
      }
      else if(this.level == 2 ) {
        console.log('its NOT zero' + this. level);
        this.tempUsers = this.tempUsers.filter(e=>(e.l2Score >=60 && e.l3Score<60));
        console.log('length of tempUsers : '+this.tempUsers.length);
        console.log('length of allUsers  : '+this.allUsers.length);
      }
      else
      {
        console.log("No such level");
      }

      console.log('length of tempUsers : '+this.tempUsers.length);
      console.log('length of allUsers  : '+this.allUsers.length);
    
  }
  selectbylevels()
  {
    if(this.level == 0 ) {
      console.log('its zero' + this. level);
      this.tempUsers = this.allUsers;
    }
    else if(this.level == 3 ) {
      console.log('its NOT zero' + this.level);
      this.tempUsers = this.allUsers.filter(e=>(e.l3Score >=60));
      console.log('length of tempUsers : '+this.tempUsers.length);
      console.log('length of allUsers  : '+this.allUsers.length);
    }
    else if(this.level == 1 ) {
      console.log('its NOT zero' + this. level);
      this.tempUsers = this.allUsers.filter(e=>(e.l1Score >=60 && e.l2Score<60));
      console.log('length of tempUsers : '+this.tempUsers.length);
      console.log('length of allUsers  : '+this.allUsers.length);
    }
    else if(this.level == 2 ) {
      console.log('its NOT zero' + this. level);
      this.tempUsers = this.allUsers.filter(e=>(e.l2Score >=60 && e.l3Score<60));
      console.log('length of tempUsers : '+this.tempUsers.length);
      console.log('length of allUsers  : '+this.allUsers.length);
    }
  
  }

  }