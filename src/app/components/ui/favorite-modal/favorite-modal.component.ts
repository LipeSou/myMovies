
import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { Details } from '../../movieDetails/movieDetailsContent/movieDetailsContent';
import type { TmdbMovieDetails } from '../../../types/TmdbMovieDetails';
import type { TmdbTvDetails } from '../../../types/TmdbTvDetails';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common';
import { WatchlistService } from '../../../services/myMovies/watchlist/watchlist.service';
import type { Watchlist } from '../../../types/Watchlists';
import { phosphorPlus, phosphorSmileyXEyes } from '@ng-icons/phosphor-icons/regular';


@Component({
  selector: 'favorite-modal',
  standalone: true,
  imports: [
    NgIcon, 
    DialogModule, 
    ButtonModule, 
    FormsModule, 
    CheckboxModule, 
    CommonModule, 
  ],
  providers: [provideIcons({ phosphorPlus, phosphorSmileyXEyes })],
  templateUrl: './favorite-modal.component.html'
})
export class FavoriteModalComponent {
  @Input({required: true}) movieDetails: Details | null = null
  @Input({required: true}) movieData: TmdbMovieDetails | TmdbTvDetails | null = null
  @Input() visible: boolean = false; 
  // Emite evento de fechamento
  @Output() onCloseDialog = new EventEmitter<void>();
  watchlists: Watchlist[] = [];
  watchlistSelected: Watchlist | null = null

  constructor(private watchlistService: WatchlistService) {}


  ngOnInit(): void {
    const userId = '5219083a-49a6-4b8e-8a24-0152e0a9081b'; // Substitua pelo ID real
    this.watchlistService.getWatchlistsByUser(userId).subscribe((data) => {
      this.watchlists = data;
      console.log(this.watchlists);
      console.log("!!watchlistSelected?.id", !!this.watchlistSelected?.id)
    });
  }

  saveSelected(watchlistClicked: Watchlist): void {
    this.watchlistSelected = watchlistClicked
  }

  closeDialog() {
    // Notifica o pai para fechar a modal
    this.onCloseDialog.emit(); 
  }
}
