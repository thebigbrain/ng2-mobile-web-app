import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentStart2learnComponent } from './document-start2learn.component';

describe('DocumentStart2learnComponent', () => {
  let component: DocumentStart2learnComponent;
  let fixture: ComponentFixture<DocumentStart2learnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentStart2learnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentStart2learnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
