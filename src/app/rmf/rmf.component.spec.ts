import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmfComponent } from './rmf.component';

describe('RmfComponent', () => {
  let component: RmfComponent;
  let fixture: ComponentFixture<RmfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RmfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RmfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
