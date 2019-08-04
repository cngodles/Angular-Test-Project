import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-homepage',
  templateUrl: './page-homepage.component.html',
  styleUrls: ['./page-homepage.component.css']
})
export class PageHomepageComponent implements OnInit {

	clickCounter:Number = 0;
	name:String = '';
	
  constructor() { }

  ngOnInit() {
  }
	
	countClick() {
    this.clickCounter += 1;
  }

}
