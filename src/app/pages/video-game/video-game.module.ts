import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { VideoGameRoutingModule } from './video-game-routing.module';

import { SharedModule } from '../../shared/shared.module';

import { VideoGamesStateService } from './video-game-state.service';

import { VideoGameComponent } from './video-game.component';
import { FilterComponent } from './filter/filter.component';
import { VideoGameListItemComponent } from './video-game-list-item/video-game-list-item.component';

@NgModule({
  declarations: [VideoGameComponent, FilterComponent, VideoGameListItemComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, VideoGameRoutingModule, SharedModule],
  providers: [VideoGamesStateService]
})
export class VideoGameModule {}
