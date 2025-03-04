import { Component, Input } from '@angular/core';
import type { Details } from '../movieDetailsContent/movieDetailsContent';
import type { Flatrate } from '../../../types/MovieProvider';
import { phosphorListHeart, phosphorX } from '@ng-icons/phosphor-icons/regular';
import { provideIcons, NgIcon } from '@ng-icons/core';
import type { TmdbMovieDetails } from '../../../types/TmdbMovieDetails';
import type { TmdbTvDetails } from '../../../types/TmdbTvDetails';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FavoriteModalComponent } from '../../ui/favorite-modal/favorite-modal.component';

@Component({
  selector: 'app-movie-details-header',
  standalone: true,
  imports: [NgIcon, DialogModule, ButtonModule, FavoriteModalComponent],
  templateUrl: './movie-details-header.component.html',
  providers: [provideIcons({ phosphorListHeart, phosphorX })],
})
export class MovieDetailsHeaderComponent {
  @Input({ required: true }) movieDetais: Details | null = null
  @Input({ required: true }) movieData: TmdbMovieDetails | TmdbTvDetails | null = null
  @Input({ required: true }) movieProvider: Flatrate[] | [] = []

  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }

  closeDialog() {
      this.visible = false;
  }

}
