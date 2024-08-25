interface GenresTmdb {
  "id": number,
  "name": string
}

export interface Tmdb {
  "adult": boolean,
  "backdrop_path": string, // onde fica uma imagem
  "belongs_to_collection": null,
  "budget": number,
  "genres": GenresTmdb[],
  "homepage": string,
  "id": number,
  "imdb_id": string,
  // "origin_country": [
  //     "US"
  // ],
  "original_language": string,
  "original_title": string,
  "overview": string,
  "popularity": number,
  "poster_path": string, //uma imagem
  // "production_companies": [
  //     {
  //         "id": 711,
  //         "logo_path": "/tEiIH5QesdheJmDAqQwvtN60727.png",
  //         "name": "Fox 2000 Pictures",
  //         "origin_country": "US"
  //     },
  //     {
  //         "id": 508,
  //         "logo_path": "/7cxRWzi4LsVm4Utfpr1hfARNurT.png",
  //         "name": "Regency Enterprises",
  //         "origin_country": "US"
  //     },
  //     {
  //         "id": 4700,
  //         "logo_path": "/A32wmjrs9Psf4zw0uaixF0GXfxq.png",
  //         "name": "The Linson Company",
  //         "origin_country": "US"
  //     },
  //     {
  //         "id": 25,
  //         "logo_path": "/qZCc1lty5FzX30aOCVRBLzaVmcp.png",
  //         "name": "20th Century Fox",
  //         "origin_country": "US"
  //     },
  //     {
  //         "id": 20555,
  //         "logo_path": "/hD8yEGUBlHOcfHYbujp71vD8gZp.png",
  //         "name": "Taurus Film",
  //         "origin_country": "DE"
  //     }
  // ],
  // "production_countries": [
  //     {
  //         "iso_3166_1": "DE",
  //         "name": "Germany"
  //     },
  //     {
  //         "iso_3166_1": "US",
  //         "name": "United States of America"
  //     }
  // ],
  "release_date": string,
  "revenue": number,
  "runtime": number,
  // "spoken_languages": [
  //     {
  //         "english_name": "English",
  //         "iso_639_1": "en",
  //         "name": "English"
  //     }
  // ],
  "status": string,
  "tagline": string,
  "title": string,
  "video": boolean,
  "vote_average": number,
  "vote_count": number
}

export interface Tmdb  {}