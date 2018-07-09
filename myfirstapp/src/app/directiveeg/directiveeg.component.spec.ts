import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveegComponent } from './directiveeg.component';

describe('DirectiveegComponent', () => {
  let component: DirectiveegComponent;
  let fixture: ComponentFixture<DirectiveegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
