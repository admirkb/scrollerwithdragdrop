import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggerCustomPlaceholderComponent } from './dragger-custom-placeholder.component';

describe('DraggerCustomPlaceholderComponent', () => {
  let component: DraggerCustomPlaceholderComponent;
  let fixture: ComponentFixture<DraggerCustomPlaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraggerCustomPlaceholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraggerCustomPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
