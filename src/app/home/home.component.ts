import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true ,
   
    responsive: {
      0: {
        items: 1
      },
      940: {
        items: 1
      }
    }
  }

  SubjectOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true ,

    responsive: {
      0: {
        items: 1
      },
      400:{
        items:2
      },
      740:{
        items:2
      },
      940: {
        items: 3
      }
    }
  }


}
