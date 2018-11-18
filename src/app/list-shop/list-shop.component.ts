import { Component, OnInit, Input} from '@angular/core';
import {ShopsService} from '../shops.service';

@Component({
  selector: 'app-list-shop',
  templateUrl: './list-shop.component.html',
  styleUrls: ['./list-shop.component.css']
})
export class ListShopComponent implements OnInit {
  shops = [];
  numberShop: number;
  constructor(private ShopsService: ShopsService) { }

  @Input() shop;

  ngOnInit() {
    this.shops = this.ShopsService.shops;
  }
  onChange(event) {
    this.numberShop = event - 1;
   // this.ShopsService.setSize(this.numberShop);
    sessionStorage.setItem('key', JSON.stringify( this.numberShop));
  }
}
