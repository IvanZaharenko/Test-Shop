import { Component, OnInit } from '@angular/core';
import {ShopsService} from '../shops.service';

@Component({
  selector: 'app-goods-shops',
  templateUrl: './goods-shops.component.html',
  styleUrls: ['./goods-shops.component.css']
})
export class GoodsShopsComponent implements OnInit {
  shops = [];
  size:number;

  constructor(private ShopsService: ShopsService) { }

  ngOnInit() {
    this.shops = this.ShopsService.shops;
  this.size =  JSON.parse(sessionStorage.getItem('key'));
  }
  makePEdit() {
  }
}
