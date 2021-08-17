import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private router:Router) { }

  // add(){
  //   this.router.navigate(['admin_add']);
  // }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['']);
  }

  ngOnInit() {

  }

  

}
