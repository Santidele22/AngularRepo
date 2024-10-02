import { CharacterInfo, Characters } from '@app/models';

export const CharacterAdapter = (
  characterInfo: CharacterInfo
): Characters[] => [...characterInfo.results];
