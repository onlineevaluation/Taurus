import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordCloudTitleComponent } from './word-cloud-title.component';

describe('WordCloudTitleComponent', () => {
  let component: WordCloudTitleComponent;
  let fixture: ComponentFixture<WordCloudTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordCloudTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordCloudTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
