import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggerDialogComponent } from './dragger-dialog.component';

describe('DraggerDialogComponent', () => {
  let component: DraggerDialogComponent;
  let fixture: ComponentFixture<DraggerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraggerDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraggerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
