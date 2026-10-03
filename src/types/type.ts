export type Game = {
  count: number,
  description: string,
  filters:  Record<string, unknown> | null,
  next: string,
  nofollow: boolean,
  nofollow_collections:  Record<string, unknown> | null,
  noindex: boolean,
  previous: number,
  results: GameItem[],
  seo_description: string,
  seo_h1: string,
  seo_keywords: string,
  seo_title: string
};

export type GameItem = {
  added: number,
  added_by_status: AddedByStatus,
  background_image: string,
  clip: null,
  dominant_color: number,
  esrb_rating: EsrbRating,
  genres: Genres[],
  id: number,
  metacritic: number,
  name: string,
  parent_platforms: ParentPlatform[],
  platforms: Platforms[],
  playtime: number,
  rating: number,
  rating_top: number,
  ratings: Ratings[],
  ratings_count: number,
  released: string,
  reviews_count: number,
  reviews_text_count: number,
  saturated_color: string,
  short_screenshots: ShortScreenshots[],
  slug: string,
  stores: Stores[],
  suggestions_count: number,
  tags: Tags[],
  tba: boolean,
  updated: string,
  user_game: null
};

export type AddedByStatus = {
  beaten: number,
  dropped: number,
  owned: number,
  playing: number,
  toplay: number,
  yet: number
};

export type EsrbRating = {
  id: number,
  name: string,
  slug: string
};

export type Genres = {
  games_count: number,
  id: number,
  image_background: string,
  name: string,
  slug: string
};

export type ParentPlatform = {
  platform: {
    id: number,
    name: string,
    slug: string
  }
};

export type Platforms = {
  platform:{
    games_count: number,
    id: number,
    image: null,
    image_background: string,
    name: string,
    slug: string,
    year_end: null,
    year_start: number
  },
  released_at: string,
  requirements_en: null,
  requirements_ru: null
};

export type Ratings = {
  id: number,
  title: string,
  count: number,
  percent: number
};

export type ShortScreenshots = {
  id: number,
  image: string
};

export type Stores = {
  id: number,
  store: {
    domain: string,
    games_count: number,
    id: number,
    image_background: string,
    name: string,
    slug: string
  },
  url: string;
};

export type Tags = {
  games_count: number,
  id: number,
  image_background: string,
  language: string,
  name: string,
  slug: string
};

export type GameDetail = {
  id: number;
  slug: string;
  name: string;
  name_original: string;
  description: string;
  description_raw: string;
  metacritic: number;
  metacritic_platforms: {
    metascore: number;
    url: string;
  }[];
  released: string;
  tba: boolean;
  updated: string;
  background_image: string;
  background_image_additional: string;
  website: string;
  rating: number;
  rating_top: number;
  ratings: Rating[];
  reactions: Record<string, unknown>;
  added: number;
  added_by_status: Record<string, unknown>;
  playtime: number;
  screenshots_count: number;
  movies_count: number;
  creators_count: number;
  achievements_count: number;
  parent_achievements_count: string;
  reddit_url: string;
  reddit_name: string;
  reddit_description: string;
  reddit_logo: string;
  reddit_count: number;
  twitch_count: string;
  youtube_count: string;
  reviews_text_count: string;
  ratings_count: number;
  suggestions_count: number;
  alternative_names: string[];
  metacritic_url: string;
  parents_count: number;
  additions_count: number;
  game_series_count: number;
  developers: Genres[];
  genres: Genres[];
  tags: Tags[];
  publishers: Genres[];

  esrb_rating: {
    id: number;
    slug: string;
    name: string;
  };

  platforms: {
    platform: {
      id: number;
      slug: string;
      name: string;
    };
    released_at: string;
    requirements: {
      minimum: string;
      recommended: string;
    };
  }[];
};

export type Rating = {
  count: number;
  id: number;
  percent: number;
  title: string;
}

export type Screenshots = {
count: number;
next: string | null;
previous: string | null;
results: ScreenshotsResutls[];
};

export type ScreenshotsResutls = {
height: number;
id: number;
image: string;
is_deleted: boolean;
width: number;
};


export type Trailers = {
  count: number;
  next: string | null;
  previous: string | null;
  results: TrailersResult[];
};

export type TrailersResult = {
  data: DataResult;
  id: number;
  name: string;
  preview: string;
};

export type DataResult = {
  480: string;
  max: string;
};

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
};

export type Creators = {
  count: number;
  next : string | null;
  previous: string | null;
  results: CreatorsResults[];
};

export type CreatorsResults = {
  games_count: number;
  id: number;
  image: string;
  image_background: string;
  name: string;
  slug: string;
};

export type User = {
  id: number;
  email: string;
  username: string;
  password_hash: string;
} | undefined;

export type PrevState = {
  error: string;
} | undefined | null;