import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SorterHorizontalComponent } from './sorter-horizontal.component';

describe('SorterHorizontalComponent', () => {
  let component: SorterHorizontalComponent;
  let fixture: ComponentFixture<SorterHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SorterHorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SorterHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
