import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { ListShopComponent } from './list-shop/list-shop.component';
import { GoodsShopsComponent } from './goods-shops/goods-shops.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';

const routes = [
  {path: '', component: HomeComponent},
  {path: 'goods', component: GoodsShopsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ListShopComponent,
    GoodsShopsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
