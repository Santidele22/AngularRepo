import { CharacterInfo, CharacterModels } from '@app/models/character.models';

export const CharacterAdapter = (
  characterInfo: CharacterInfo
): CharacterModels[] => [...characterInfo.results];
