import { Component, OnInit } from '@angular/core';
import { myscore } from '../myscore';

import { ReportService } from '../report.service';

@Component({
  selector: 'app-user-report',
  templateUrl: './user-report.component.html',
  styleUrls: ['./user-report.component.css']
})
export class UserReportComponent implements OnInit {

  loggedinUserId:number;
  userFirstName:string;
  userLastName:string;
  newScore:myscore[]=[];
  constructor(public reportService:ReportService) { }

  ngOnInit(): void {

    this.loggedinUserId=parseInt(sessionStorage.getItem("userId"));
    this.userFirstName=sessionStorage.getItem("firstName");
    this.userLastName=sessionStorage.getItem("lastName");

    this.reportService.getReportService(this.loggedinUserId).subscribe((data:myscore[])=>{

      this.newScore=data;
      console.log(this.newScore);
 



    //  console.log(this.fetchReport[0].l1Score);

     
       
      });
  }


}
