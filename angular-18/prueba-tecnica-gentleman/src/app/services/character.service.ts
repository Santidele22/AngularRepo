import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CharacterAdapter } from '@app/adapters';
import { CharacterInfo, CharacterModels } from '@app/models/character-models';
import { catchError, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private readonly baseURl = 'https://rickandmortyapi.com/api/character';
  http = inject(HttpClient);

  getAllCharacters = (): Observable<CharacterModels[]> =>
    this.http
      .get<CharacterInfo>(this.baseURl)
      .pipe(map((info) => CharacterAdapter(info)));

  addCharacter = (character: Omit<CharacterModels, 'id'>): Observable<void> => {
    return this.http.post<void>(this.baseURl, { character }).pipe(
      catchError(() => {
        console.info('Error prevented for testing');
        return Promise.resolve();
      })
    );
  };

  removeCharacter = (id: number): Observable<void> => {
    const url = `${this.baseURl}/${id}`;
    return this.http.delete<void>(url).pipe(
      catchError(() => {
        console.info('Error prevented for testing');
        return Promise.resolve();
      })
    );
  };

  updateCharacter = (
    character: CharacterModels,
    id: number
  ): Observable<void> => {
    const url = `${this.baseURl}/${id}`;
    return this.http.put<void>(url, { character }).pipe(
      catchError(() => {
        console.info('Error prevented for testing');
        return Promise.resolve();
      })
    );
  };
}
