import { Component, OnInit } from '@angular/core';
import {ShopsService} from '../shops.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ShopsService]

})
export class HomeComponent implements OnInit {
  shops = [];

  constructor(private ShopsService: ShopsService) { }

  ngOnInit() {    this.shops = this.ShopsService.shops;

  }

}
