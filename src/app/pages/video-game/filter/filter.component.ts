import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

import { VideoGamesStateService } from '../video-game-state.service';
import { OrderBy, Sort } from '../../../core/models/filter.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  OrderBy = OrderBy;
  Sort = Sort;

  form: FormGroup = this.fb.group({
    name: [''],
    score: [0, [Validators.min(0), Validators.max(10)]],
    orderBy: [],
    sort: [Sort.Ascending]
  });

  constructor(private fb: FormBuilder, private videoGamesStateService: VideoGamesStateService) {}

  ngOnInit(): void {
    this.form.valueChanges.pipe(debounceTime(300)).subscribe(value => {
      const { name, score, orderBy, sort } = value;
      this.videoGamesStateService.filter(name, score, orderBy, sort);
    });
  }

  changeSort() {
    const sort = this.form.get('sort')!.value;
    this.form.get('sort')?.setValue(sort === Sort.Ascending ? Sort.Descending : Sort.Ascending);
  }
}
