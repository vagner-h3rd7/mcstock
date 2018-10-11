import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptListComponent } from './compt-list.component';

describe('ComptListComponent', () => {
  let component: ComptListComponent;
  let fixture: ComponentFixture<ComptListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComptListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
