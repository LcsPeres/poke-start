import { Injectable } from '@angular/core';
import { PokemonModel } from './pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  constructor() { }

  todos: Array<PokemonModel> = [];
  fire: Array<PokemonModel> = [];
  water: Array<PokemonModel> = [];
  eletric: Array<PokemonModel> = [];
}
