import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teknofest',
  templateUrl: './teknofest.component.html',
  styleUrls: ['./teknofest.component.css','./carousel.css']
})
export class TeknofestComponent implements OnInit{
  
  imageList:string[] = [];
  
  ngOnInit(): void {
    this.imageList = [
      'assets/images/teknofest1.jpg',
      'assets/images/teknofest2.jpg',
      'assets/images/teknofest3.jpg',
      'assets/images/teknofest4.jpg',
      'assets/images/teknofest5.jpg',
      'assets/images/teknofest6.jpg',
    ]
  }

  
}
