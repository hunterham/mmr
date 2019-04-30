import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  date = new Date();
  thisYear = this.date.getFullYear();
  constructor() { }

  ngOnInit() {
  }

}
