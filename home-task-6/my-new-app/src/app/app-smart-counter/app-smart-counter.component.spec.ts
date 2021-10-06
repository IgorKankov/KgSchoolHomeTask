import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSmartCounterComponent } from './app-smart-counter.component';

describe('AppSmartCounterComponent', () => {
  let component: AppSmartCounterComponent;
  let fixture: ComponentFixture<AppSmartCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppSmartCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSmartCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
