export interface Genres {
  "id": number,
  "name": string
}

export interface Seasons {
  "air_date": string,
  "episode_count": number,
  "id": number,
  "name": string,
  "overview": string,
  "poster_path": string,
  "season_number": number,
  "vote_average": number
}

export interface Networks {
  "id": number,
  "logo_path": string,
  "name": string,
  "origin_country": string
}

export interface TmdbTvDetails  {
  "adult": boolean,
  "backdrop_path": string,
  "created_by": [],
  "episode_run_time": [],
  "first_air_date": string,
  "genres": Genres[],
  "homepage": string,
  "id": number,
  "in_production": boolean,
  "languages": string[],
  "last_air_date": string,
  "last_episode_to_air": {
    "id": number,
    "name": string,
    "overview": string,
    "vote_average": number,
    "vote_count": number,
    "air_date": string,
    "episode_number": number,
    "episode_type": string,
    "production_code": string,
    "runtime": number,
    "season_number": number,
    "show_id": number,
    "still_path": string
  },
  "name": string,
  "next_episode_to_air": number | null,
  "networks": Networks[],
  "number_of_episodes": number,
  "number_of_seasons": number,
  "origin_country": string[],
  "original_language": string,
  "original_name": string,
  "overview": string,
  "popularity": 1163.31,
  "poster_path": string,
  "production_companies": Object[],
  "production_countries": Object[],
  "seasons": Seasons[],
  "spoken_languages": Object[],
  "status": string,
  "tagline": string,
  "type": string,
  "vote_average": number,
  "vote_count": number
}
