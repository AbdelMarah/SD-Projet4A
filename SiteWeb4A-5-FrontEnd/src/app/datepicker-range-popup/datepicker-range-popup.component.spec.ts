import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdDatepickerRangePopup } from './datepicker-range-popup.component';

describe('DatepickerRangePopupComponent', () => {
  let component: NgbdDatepickerRangePopup;
  let fixture: ComponentFixture<NgbdDatepickerRangePopup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgbdDatepickerRangePopup ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbdDatepickerRangePopup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
