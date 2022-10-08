import { TestBed } from '@angular/core/testing';

import { VideoGameStateService } from './video-game-state.service';

describe('VideoGameStateService', () => {
  let service: VideoGameStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoGameStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
