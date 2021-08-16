import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDetailsPageComponent } from './my-details-page.component';

describe('MyDetailsPageComponent', () => {
  let component: MyDetailsPageComponent;
  let fixture: ComponentFixture<MyDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDetailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
