import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  errorMessage = 'Some Error Happened. Please contatc our support @ *****--*****';
  constructor() { }

  ngOnInit() {
  }

}
