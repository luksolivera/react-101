export interface Detail {
    name: string;
    url: string;
  }
  
export interface ListResponse {
    count: number;
    next: string;
    previous: string;
    results: Detail[];
  }
  
  
export interface Pokemon {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: Ability[];
    forms: Form[];
    game_indices: GameIndex[];
    held_items: HeldItem[];
    location_area_encounters: string;
    moves: Move[];
    species: Species;
    sprites: Sprites;
    stats: Stat[];
    types: Type[];
    past_types: PastType[];
  }
  
  export interface Ability {
    is_hidden: boolean;
    slot: number;
    ability: AbilityDetail;
  }
  
  export interface AbilityDetail {
    name: string;
    url: string;
  }
  
  export interface Form {
    name: string;
    url: string;
  }
  
  export interface GameIndex {
    game_index: number;
    version: Version;
  }
  
  export interface Version {
    name: string;
    url: string;
  }
  
  export interface HeldItem {
    item: Item;
    version_details: VersionDetail[];
  }
  
  export interface Item {
    name: string;
    url: string;
  }
  
  export interface VersionDetail {
    rarity: number;
    version: Version;
  }
  
  export interface Move {
    move: MoveDetail;
    version_group_details: VersionGroupDetail[];
  }
  
  export interface MoveDetail {
    name: string;
    url: string;
  }
  
  export interface VersionGroupDetail {
    level_learned_at: number;
    version_group: VersionGroup;
    move_learn_method: MoveLearnMethod;
  }
  
  export interface VersionGroup {
    name: string;
    url: string;
  }
  
  export interface MoveLearnMethod {
    name: string;
    url: string;
  }
  
  export interface Species {
    name: string;
    url: string;
  }
  
  export interface Sprites {
    back_default: string;
    back_female: null | string;
    back_shiny: string;
    back_shiny_female: null | string;
    front_default: string;
    front_female: null | string;
    front_shiny: string;
    front_shiny_female: null | string;
    other: Other;
    versions: Versions;
  }
  
  export interface Other {
    dream_world: DreamWorld;
    home: Home;
    official_artwork: OfficialArtwork;
  }
  
  export interface DreamWorld {
    front_default: string;
    front_female: null | string;
  }
  
  export interface Home {
    front_default: string;
    front_female: null | string;
    front_shiny: string;
    front_shiny_female: null | string;
  }
  
  export interface OfficialArtwork {
    front_default: string;
  }
  
  export interface Versions {
    // Add the rest of the generations here
    generation_i: Generation;
    generation_ii: Generation;
    generation_iii: Generation;
    generation_iv: Generation;
    generation_v: Generation;
    generation_vi: Generation;
    generation_vii: Generation;
    generation_viii: Generation;
  }
  
  export interface Generation {
    // Add the rest of the versions here
    red_blue: VersionSprites;
    yellow: VersionSprites;
  }
  
  export interface VersionSprites {
    back_default: string;
    back_gray: string;
    front_default: string;
    front_gray: string;
  }
  
  export interface Stat {
    base_stat: number;
    effort: number;
    stat: StatDetail;
  }
  
  export interface StatDetail {
    name: string;
    url: string;
  }
  
  export interface Type {
    slot: number;
    type: TypeDetail;
  }
  
  export interface TypeDetail {
    name: string;
    url: string;
  }
  
  export interface PastType {
    generation: GenerationDetail;
    types: Type[];
  }
  
  export interface GenerationDetail {
    name: string;
    url: string;
  }
  