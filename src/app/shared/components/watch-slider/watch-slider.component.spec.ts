import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchSliderComponent } from './watch-slider.component';

describe('WatchSliderComponent', () => {
  let component: WatchSliderComponent;
  let fixture: ComponentFixture<WatchSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WatchSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
