export interface ChampionItem {
  blurb: string;
  id: string;
  image: ChampionImage;
  info: ChampionInfo;
  key: string;
  name: string;
  partype: string;
  stats: ChampionStats;
  tags: string[];
  title: string;
  version: string;
}

export interface ChampionImage {
  full: string;
  group: string;
  h: number;
  sprite: string;
  w: number;
  x: number;
  y: number;
}

export interface ChampionInfo {
  attack: number;
  defense: number;
  difficulty: number;
  magic: number;
}

export interface ChampionStats {
  armor: number;
  armorperlevel: number;
  attackdamage: number;
  attackdamageperlevel: number;
  attackrange: number;
  attackspeedoffset: number;
  attackspeedperlevel: number;
  crit: number;
  critperlevel: number;
  hp: number;
  hpperlevel: number;
  hpregen: number;
  hpregenperlevel: number;
  movespeed: number;
  mp: number;
  mpperlevel: number;
  mpregen: number;
  mpregenperlevel: number;
  spellblock: number;
  spellblockperlevel: number;
}
