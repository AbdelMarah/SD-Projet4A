import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Catalogue2Component } from './catalogue2.component';

describe('Catalogue2Component', () => {
  let component: Catalogue2Component;
  let fixture: ComponentFixture<Catalogue2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Catalogue2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Catalogue2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
