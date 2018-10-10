import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverItemsComponent } from './driver-items.component';

describe('DriverItemsComponent', () => {
  let component: DriverItemsComponent;
  let fixture: ComponentFixture<DriverItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
