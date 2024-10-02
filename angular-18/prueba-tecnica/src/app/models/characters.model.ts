export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface CharacterInfo {
  info: Info;
  results: Characters[];
}
export interface Characters {
  id: number;
  name: string;
  status: Status;
  type: string;
  gender: Gender;
  origin: Origin;
  location: Location;
  image: string;
}

export interface LinkedElement {
  name: string;
  url: string;
}
export interface Origin extends LinkedElement {}
export interface Location extends LinkedElement {}

export enum Status {
  'ALIVE' = 'Alive',
  'DEAD' = 'Dead',
  'UNKNOWN' = 'unknown',
}

export enum Gender {
  'FEMALE' = 'Female',
  'MALE' = 'Male',
  'GENDERLESS' = 'Genderless',
  'UNKNOWN' = 'unknown',
}
export const emptyCharacter: Characters = {
  id: 0,
  name: '',
  status: Status.UNKNOWN,
  type: '',
  gender: Gender.UNKNOWN,
  origin: { name: '', url: '' },
  location: { name: '', url: '' },
  image: '',
};
