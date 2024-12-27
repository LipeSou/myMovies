import { Component, Input } from '@angular/core';
import type { Seasons } from '../../../types/TmdbTvDetails';

@Component({
  selector: 'season-details',
  standalone: true,
  imports: [],
  templateUrl: './season-details.component.html',
})
export class SeasonsDetailsComponent {
  @Input({ required: true }) seasons: Seasons[] | null | undefined = null
}
