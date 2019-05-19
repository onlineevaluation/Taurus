import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorTitleInfoComponent } from './error-title-info.component';

describe('ErrorTitleInfoComponent', () => {
  let component: ErrorTitleInfoComponent;
  let fixture: ComponentFixture<ErrorTitleInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorTitleInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorTitleInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
