import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptFormComponent } from './compt-form.component';

describe('ComptFormComponent', () => {
  let component: ComptFormComponent;
  let fixture: ComponentFixture<ComptFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComptFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
