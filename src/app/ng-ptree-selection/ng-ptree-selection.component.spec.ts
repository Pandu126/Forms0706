import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgPTreeSelectionComponent } from './ng-ptree-selection.component';

describe('NgPTreeSelectionComponent', () => {
  let component: NgPTreeSelectionComponent;
  let fixture: ComponentFixture<NgPTreeSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgPTreeSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgPTreeSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
