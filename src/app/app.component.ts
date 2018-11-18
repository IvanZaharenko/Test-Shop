import { Component, OnInit } from '@angular/core';
import {ShopsService} from './shops.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShopsService]
})
export class AppComponent implements OnInit {

  constructor() {  }
  ngOnInit() {
  }
}
