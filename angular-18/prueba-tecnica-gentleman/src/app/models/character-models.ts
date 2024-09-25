export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}
export interface CharacterInfo {
  info: Info;
  results: CharacterModels[];
}

export enum Gender {
  'MALE' = 'Male',
  'FEMALE' = 'Female',
  'GENDERLESS' = 'Genderless',
  'UNKNOWN ' = 'unknown',
}
export enum Status {
  'ALIVE' = 'Alive',
  'DEAD' = 'Dead',
  'UNKNOWN' = 'unknown',
}

export interface LinkedElement {
  name: string;
  link: string;
}
export interface Origin extends LinkedElement {}
export interface Location extends LinkedElement {}

export interface CharacterModels {
  id: number;
  name: string;
  status: Status;
  species: string;
  type: string;
  gender: Gender;
  origin: Origin;
  location: Location;
  image: string;
}
export const emptyCharacter: CharacterModels = {
  id: 0,
  name: '',
  status: Status.UNKNOWN, // Suponiendo que quieres el valor por defecto de Status
  species: '',
  type: '',
  gender: Gender.GENDERLESS, // Suponiendo que quieres el valor por defecto de Gender
  origin: {
    name: '',
    link: '',
  },
  location: {
    name: '',
    link: '',
  },
  image: '',
};
