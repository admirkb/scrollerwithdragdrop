import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggerHandleMeComponent } from './dragger-handle-me.component';

describe('DraggerHandleMeComponent', () => {
  let component: DraggerHandleMeComponent;
  let fixture: ComponentFixture<DraggerHandleMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraggerHandleMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraggerHandleMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
