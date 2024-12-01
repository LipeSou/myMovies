export interface Flatrate {
  "logo_path": string,
  "provider_id": number,
  "provider_name": string,
  "display_priority": number
}

export interface MovieProvider {
  "id": number,
  "results": {
    "BR": {
      "link": string,
      "flatrate": Flatrate[]
    },
  }
}