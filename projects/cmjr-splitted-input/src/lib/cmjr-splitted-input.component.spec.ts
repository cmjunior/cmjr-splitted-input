import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmjrSplittedInputComponent } from './cmjr-splitted-input.component';

describe('CmjrSplittedInputComponent', () => {
  let component: CmjrSplittedInputComponent;
  let fixture: ComponentFixture<CmjrSplittedInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmjrSplittedInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmjrSplittedInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
