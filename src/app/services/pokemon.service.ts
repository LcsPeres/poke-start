import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  readonly url: string = 'https://pokeapi.co/api/v2/';

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<any>(this.url + 'pokemon');
  }

  getByUrl(url: string) {
    return this.http.get(url);
  }

  getAllByType(type: number) {
    return this.http.get(this.url + 'type/' + type);
  }
}
