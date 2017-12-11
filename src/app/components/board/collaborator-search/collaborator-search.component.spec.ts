import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaboratorSearchComponent } from './collaborator-search.component';

describe('CollaboratorSearchComponent', () => {
  let component: CollaboratorSearchComponent;
  let fixture: ComponentFixture<CollaboratorSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollaboratorSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollaboratorSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
