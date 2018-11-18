import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsShopsComponent } from './goods-shops.component';

describe('GoodsShopsComponent', () => {
  let component: GoodsShopsComponent;
  let fixture: ComponentFixture<GoodsShopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodsShopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsShopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
