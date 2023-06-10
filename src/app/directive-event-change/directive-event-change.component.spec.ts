import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveEventChangeComponent } from './directive-event-change.component';

describe('DirectiveEventChangeComponent', () => {
  let component: DirectiveEventChangeComponent;
  let fixture: ComponentFixture<DirectiveEventChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveEventChangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveEventChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
