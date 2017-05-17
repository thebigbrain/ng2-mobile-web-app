import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentLearningComponent } from './document-learning.component';

describe('DocumentLearningComponent', () => {
  let component: DocumentLearningComponent;
  let fixture: ComponentFixture<DocumentLearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentLearningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
