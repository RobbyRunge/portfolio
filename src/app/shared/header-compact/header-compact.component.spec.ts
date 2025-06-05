import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCompactComponent } from './header-compact.component';

describe('HeaderCompactComponent', () => {
  let component: HeaderCompactComponent;
  let fixture: ComponentFixture<HeaderCompactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderCompactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderCompactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
