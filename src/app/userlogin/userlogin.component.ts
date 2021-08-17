import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyuserService } from '../myuser.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  uId:number;
  uEmail : string;
  uPassword : string;
  temp : any;
  constructor(private userService : MyuserService,private router: Router) { }


  ngOnInit(): void {
  }
  Login(){
    this.userService.findMyuserByEmailService(this.uEmail).subscribe(
      (data: any)=> {
        this.temp = data;
        
        if(this.uEmail == this.temp.email && this.uPassword == this.temp.password){
          console.log("User Logged in");
          console.log("Welcome "+this.temp.firstName +" "+this.temp.lastName+" "+this.temp.userId);

          sessionStorage.setItem('email',this.temp.email);
          sessionStorage.setItem('userId',this.temp.userId);
          sessionStorage.setItem('firstName',this.temp.firstName);
          sessionStorage.setItem('lastName',this.temp.lastName);



          this.router.navigate(['subjectList']);
        }
        else{
          console.log("Inavlid Username or Password");
        }
      }
    )
  }

}
