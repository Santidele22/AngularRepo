import {
  patchState,
  signalStore,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { Characters } from '@app/models';
import { inject, InjectionToken } from '@angular/core';
import { CharactersServices } from '@app/services';
import { lastValueFrom } from 'rxjs';

type StoreState = {
  characters: Characters[];
};

const initialState: StoreState = {
  characters: [],
};

const Store_State = new InjectionToken<StoreState>('GlobalStore', {
  factory: () => initialState,
});

export const GlobalStare = signalStore(
  { providedIn: 'root' },
  withState(() => inject(Store_State)),
  withMethods((store, characterService = inject(CharactersServices)) => ({
    getAllCharacter(id: number) {
      return store.characters().find((char) => char.id === id);
    },
    async addCharacter(character: Omit<Characters, 'id'>) {
      try {
        await lastValueFrom(characterService.addCharacter(character));

        patchState(store, ({ characters }) => ({
          characters: [
            ...characters,
            { id: new Date().getTime(), ...character },
          ],
        }));
      } catch (error) {}
    },
    async updateCharacter(character: Characters) {
      try {
        await lastValueFrom(characterService.updateCharacter(character));

        patchState(store, ({ characters }) => ({
          characters: characters.map((char) =>
            char.id === character.id ? { ...char, ...character } : char
          ),
          isLoading: false,
        }));
      } catch (error) {}
    },
    async removeCharacter(id: number) {
      try {
        await lastValueFrom(characterService.removeCharacter(id));

        patchState(store, ({ characters }) => ({
          characters: characters.filter((char) => char.id !== id),
        }));
      } catch (error) {}
    },
  })),
  withHooks({
    async onInit(store, characterService = inject(CharactersServices)) {
      const characters = await lastValueFrom(characterService.getCharacters());

      patchState(store, { characters });
    },
  })
);
