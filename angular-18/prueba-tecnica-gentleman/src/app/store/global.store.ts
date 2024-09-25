import { inject, InjectionToken } from '@angular/core';
import { CharacterModels } from '@app/models/character-models';
import { CharacterService } from '@app/services';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { lastValueFrom } from 'rxjs';

type StoreState = {
  characters: CharacterModels[];
};

const initialState: StoreState = {
  characters: [],
};

const STORE_STATE = new InjectionToken<StoreState>('GlobalStore', {
  factory: () => initialState,
});

export const GlobalStore = signalStore(
  { providedIn: 'root' },
  withState(() => inject(STORE_STATE)),
  withMethods((store, characterService = inject(CharacterService)) => ({
    getCharacter(id: number) {
      return store.characters().find((char) => char.id === id);
    },
    async addCharacter(character: Omit<CharacterModels, 'id'>) {
      try {
        await lastValueFrom(characterService.addCharacter(character));

        patchState(store, ({ characters }) => ({
          characters: [
            ...characters,
            { id: new Date().getTime(), ...character },
          ],
        }));
      } catch (error) {
        if (error instanceof Error) {
          throw new Error(error.message);
        } else {
          throw new Error(String(error));
        }
      }
    },
    async removeCharacter(id: number) {
      try {
        await lastValueFrom(characterService.removeCharacter(id));

        patchState(store, ({ characters }) => ({
          characters: [...characters.filter((char) => char.id !== id)],
        }));
      } catch (error) {
        if (error instanceof Error) {
          throw new Error(error.message);
        } else {
          throw new Error(String(error));
        }
      }
    },
    async updateCharacter(character: CharacterModels, id: number) {
      try {
        await lastValueFrom(characterService.updateCharacter(character, id));

        patchState(store, ({ characters }) => ({
          characters: [
            ...characters.map((char) =>
              char.id === character.id ? { ...char, ...character } : char
            ),
          ],
        }));
      } catch (error) {
        if (error instanceof Error) {
          throw new Error(error.message);
        } else {
          throw new Error(String(error));
        }
      }
    },
  }))
);
