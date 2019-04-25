import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggerCustomPreviewComponent } from './dragger-custom-preview.component';

describe('DraggerCustomPreviewComponent', () => {
  let component: DraggerCustomPreviewComponent;
  let fixture: ComponentFixture<DraggerCustomPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraggerCustomPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraggerCustomPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
