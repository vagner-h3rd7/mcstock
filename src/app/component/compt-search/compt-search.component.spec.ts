import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptSearchComponent } from './compt-search.component';

describe('ComptSearchComponent', () => {
  let component: ComptSearchComponent;
  let fixture: ComponentFixture<ComptSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComptSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
