import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})

export class AdminLoginComponent implements OnInit {

  sessionUser : String = sessionStorage.getItem("adminId");
  aEmail : string;
  aPassword : string;
  temp : any;
  loggedIn:boolean=false;
  constructor(private adminService : AdminService,private router:Router) { }

  Login(){
    this.adminService.findMyadminByEmailService(this.aEmail).subscribe(
      
          (data: any)=> {
        this.temp = data;
        
        if(this.aEmail == this.temp.userEmail&& this.aPassword == this.temp.password){
          console.log("User Logged in");
          console.log("Welcome "+this.temp.firstName +" "+this.temp.lastName);
          this.loggedIn=true;
         sessionStorage.setItem('aEmail',String(this.aEmail));
       sessionStorage.setItem('adminId',data.adminId)

          this.router.navigate(['../admin_dashboard']);
        }
        else{
          console.log("Inavlid Username or Password");
        }
      }
    )
  }
  Logout()
  {
    sessionStorage.clear();
  }

  ngOnInit(): void {
  }


}
