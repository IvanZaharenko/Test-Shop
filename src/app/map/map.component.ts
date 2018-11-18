import { Component, OnInit } from '@angular/core';
import {ShopsService} from '../shops.service';

declare let ymaps: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  public map: any;
  shops = [];
  placemark:any;
  constructor(private ShopsService: ShopsService) { }

  ngOnInit() {
    this.shops = this.ShopsService.shops;
    ymaps.ready().then(() => {
      this.map = new ymaps.Map('map', {
        center: [53.89464131, 27.55404188],
        zoom: 12,
        controls: ['zoomControl'],
        behaviors: ['drag']
      });
      for (let i = 0, l = this.shops.length; i < l; i++) {
        this.placemark = new ymaps.Placemark(this.shops[i].coords, {
          hintContent: this.shops[i].text,
          balloonContent: this.shops[i].text + '<br>' + this.shops[i].adress
        });
        this.map.geoObjects.add(this.placemark);
      }
    });

  }

}
