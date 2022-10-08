import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoGameComponent } from './video-game.component';

describe('VideoGameComponent', () => {
  let component: VideoGameComponent;
  let fixture: ComponentFixture<VideoGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
