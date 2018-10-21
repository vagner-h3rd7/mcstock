import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptTableComponent } from './compt-table.component';

describe('ComptTableComponent', () => {
  let component: ComptTableComponent;
  let fixture: ComponentFixture<ComptTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComptTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
