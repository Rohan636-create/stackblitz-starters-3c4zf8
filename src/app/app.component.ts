import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: string = ' hero app';
  user: string = 'rohan';
  phonenumber: string = '123456789';
  age: number = 20;
  constructor() {}

  ngOnInit() {}
}
