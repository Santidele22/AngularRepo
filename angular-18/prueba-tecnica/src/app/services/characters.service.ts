import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CharacterAdapter } from '@app/adapters';
import { CharacterInfo, Characters } from '@app/models';
import { catchError, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharactersServices {
  private readonly BASE_URL = `https://rickandmortyapi.com/api/character`;
  private http = inject(HttpClient);

  getCharacters(): Observable<Characters[]> {
    return this.http
      .get<CharacterInfo>(this.BASE_URL)
      .pipe(map((info) => CharacterAdapter(info)));
  }
  removeCharacter(id: number): Observable<void> {
    const SINGLE_CHARACTER_URL = `${this.BASE_URL}/${id}`;

    return this.http.delete<void>(SINGLE_CHARACTER_URL).pipe(
      catchError((error) => {
        console.error('Error prevented for testing');
        return Promise.resolve();
      })
    );
  }
  updateCharacter(character: Characters): Observable<void> {
    return this.http.put<void>(this.BASE_URL, { character }).pipe(
      catchError((error) => {
        console.error('Error prevented for testing');
        return Promise.resolve();
      })
    );
  }
  addCharacter(character: Omit<Characters, 'id'>): Observable<void> {
    return this.http.post<void>(this.BASE_URL, { character }).pipe(
      catchError((error) => {
        console.error('Error prevented for testing');
        return Promise.resolve();
      })
    );
  }
}
