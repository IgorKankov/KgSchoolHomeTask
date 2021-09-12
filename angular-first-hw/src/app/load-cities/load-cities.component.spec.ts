import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadCitiesComponent } from './load-cities.component';

describe('LoadCitiesComponent', () => {
  let component: LoadCitiesComponent;
  let fixture: ComponentFixture<LoadCitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadCitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
