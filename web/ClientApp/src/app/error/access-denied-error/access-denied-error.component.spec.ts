import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessDeniedErrorComponent } from './access-denied-error.component';

describe('AccessDeniedErrorComponent', () => {
  let component: AccessDeniedErrorComponent;
  let fixture: ComponentFixture<AccessDeniedErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessDeniedErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessDeniedErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
