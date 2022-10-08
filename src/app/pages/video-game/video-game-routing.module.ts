import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VideoGameComponent } from './video-game.component';

const routes: Routes = [{ path: '', component: VideoGameComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoGameRoutingModule {}
