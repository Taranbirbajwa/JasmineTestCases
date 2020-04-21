import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppInitialComponent } from './app-initial.component';

describe('AppInitialComponent', () => {
  let component: AppInitialComponent;
  let fixture: ComponentFixture<AppInitialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppInitialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppInitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
