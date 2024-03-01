import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnBacktopComponent } from './btn-backtop.component';

describe('BtnBacktopComponent', () => {
  let component: BtnBacktopComponent;
  let fixture: ComponentFixture<BtnBacktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnBacktopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnBacktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
