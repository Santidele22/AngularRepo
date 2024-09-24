import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncComponentComponent } from './async-component.component';

describe('AsyncComponentComponent', () => {
  let component: AsyncComponentComponent;
  let fixture: ComponentFixture<AsyncComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsyncComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsyncComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
