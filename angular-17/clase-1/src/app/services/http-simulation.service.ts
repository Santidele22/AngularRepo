import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpSimulationService {
  http = inject(HttpClient);
  hittEndopoint = () =>
    this.http.get('https://jsonplaceholder.typicode.com/todos/1');
}
