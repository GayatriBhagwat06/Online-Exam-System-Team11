import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from '../register';
import { UserRegistrationService } from '../ServiceRegistration/user-registration.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class RegistrationComponent implements OnInit {
  //registerForm!: FormGroup;
  submitted = false;
  reg:Register=new Register();

  
  constructor(private formBuilder: FormBuilder,private UserRegistrationservice:UserRegistrationService,public router:Router) {
   
   
   }

  ngOnInit(): void {
    console.log(JSON.stringify(this.reg));

 
}





onSubmit(regForm:NgForm) {
  console.log(JSON.stringify(regForm.value));
  this.submitted = true;

  this.save();
}
public save(){
  this.UserRegistrationservice.doRegistration(this.reg).subscribe(data => console.log(data), error => console.log(error)
  
    );
    this.reg=new Register();
    this.router.navigate(['userlogin']);
}

  }
