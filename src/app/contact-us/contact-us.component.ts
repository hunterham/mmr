import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  date = new Date();
  thisYear = this.date.getFullYear();
  constructor() { }

  ngOnInit() {
  }

}
