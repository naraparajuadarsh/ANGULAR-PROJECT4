import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPageNotFoundComponent } from './my-page-not-found.component';

describe('MyPageNotFoundComponent', () => {
  let component: MyPageNotFoundComponent;
  let fixture: ComponentFixture<MyPageNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPageNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
