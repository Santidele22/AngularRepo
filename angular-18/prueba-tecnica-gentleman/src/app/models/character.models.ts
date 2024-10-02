interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}
export interface CharacterInfo {
  info: Info;
  results: CharacterModels[];
}

enum Status {
  ALIVE = 'Alive',
  DEAD = 'Dead',
  UNKNWON = 'unknown',
}
enum Gender {
  FEMALE = 'Female',
  MALE = 'Male',
  GENDERLESS = 'Genderless',
  UNKNWON = 'unknown',
}

interface LinkedElement {
  name: string;
  url: string;
}
interface Origin extends LinkedElement {}
interface CharacterLocation extends LinkedElement {}

export interface CharacterModels {
  id: number;
  name: string;
  status: Status;
  type: string;
  gender: Gender;
  origin: Origin;
  location: CharacterLocation;
  image: string;
}

export const emptyCharacter: CharacterModels = {
  id: 0,
  name: '',
  status: Status.UNKNWON,
  type: '',
  gender: Gender.UNKNWON,
  origin: {
    name: '',
    url: '',
  },
  location: {
    name: '',
    url: '',
  },
  image: '',
};
