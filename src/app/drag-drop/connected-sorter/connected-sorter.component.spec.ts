import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectedSorterComponent } from './connected-sorter.component';

describe('ConnectedSorterComponent', () => {
  let component: ConnectedSorterComponent;
  let fixture: ComponentFixture<ConnectedSorterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectedSorterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectedSorterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
