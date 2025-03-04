export interface Watchlist {
  id: string;
  name: string;
  createdAt: string; 
  updatedAt: string;

  userOwner: {
    name: string;
    email: string;
  } | null;

  // Lista de usuários relacionados à watchlist
  watchlistUsers: WatchlistUser[];

  // Lista de itens da watchlist
  items: WatchlistItem[];
}

// Interface para watchlistUsers
export interface WatchlistUser {
  id: string;
  createdAt: string;
  user?: {
    name: string;
    email: string;
  };
}

export interface WatchlistItem {
  id: string;
  tmdbId: number;
  mediaType: string; // Pode ser 'movie', 'tv', etc.
  movieData: {
    year: number;
    title: string;
  };
  watched: boolean;
  watchedAt: string;
  userRating: number | null;
  createdAt: string;
}
