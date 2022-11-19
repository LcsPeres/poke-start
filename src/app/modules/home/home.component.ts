import { Component, OnInit } from '@angular/core';
import { AppStateService } from 'src/app/models/app-state.service';
import { PokemonModel, StatModel } from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  typeSelected: number = 0;
  abaSelected: number = 2;

  pokemons: Array<any> = [];

  constructor(
    private service: PokemonService,
    private appState: AppStateService
  ) { }

  ngOnInit() {
    this.getAllPokemons();
  }

  getAllPokemons() {
    this.pokemons = [];

    if (this.appState.todos.length > 0) {
      this.pokemons = this.appState.todos;
      return;
    }

    this.service.getAll().subscribe(
      (res: any) => {
        res.results.forEach(elemento => {
          this.getPokemon(elemento.url);
        });
      }
    );
  }

  getPokemon(url: string) {
    this.service.getByUrl(url).subscribe(
      (res: any) => {
        let pokemon: PokemonModel = new PokemonModel();
        pokemon.id = res.id;
        pokemon.nome = res.name;

        let tipos: Array<string> = [];
        res.types.forEach(type => {
          tipos.push(type.type.name);
        });
        pokemon.tipos = tipos;

        pokemon.imagens = {
          front: res.sprites.front_default,
          back: res.sprites.back_default
        };

        res.stats.forEach(stat => {
          let statModel = new StatModel();
          statModel.nome = stat.stat.name;
          statModel.valor = stat.base_stat.toString();

          pokemon.stats.push(statModel);
        });

        this.pokemons.push(pokemon);
        this.pokemons.sort((a: PokemonModel, b: PokemonModel) => a.id - b.id);
        this.saveState(this.typeSelected);
      }
    );
  }

  filtrar(type: number) {
    this.typeSelected = type;

    if (type === 0) {
      this.getAllPokemons();
      return;
    }

    let state: Array<PokemonModel> = this.getState(type);
    if (state.length > 0) {
      this.pokemons = state;
      return;
    }

    this.pokemons = [];
    this.service.getAllByType(type).subscribe(
      (res: any) => {
        console.log(res)
        if (res.pokemon) {
          let qtd = res.pokemon.length >= 10 ? 10 : res.pokemon.length;

          for (let i = 0; i < qtd; i++) {
            this.getPokemon(res.pokemon[i].pokemon.url);
          }
        }
      }
    );
  }

  getState(type: number): Array<PokemonModel> {
    switch (type) {
      case 10:
        return this.appState.fire;

      case 11:
        return this.appState.water;

      case 13:
        return this.appState.eletric;
    }
  }

  saveState(type: number) {
    switch (type) {
      case 10:
        this.appState.fire = this.pokemons;
        break;

      case 11:
        this.appState.water = this.pokemons;
        break;

      case 13:
        this.appState.eletric = this.pokemons;
        break;

      default:
        this.appState.todos = this.pokemons;
        break;
    }
  }

  favoritar(id: number) {
    let pokemon: Array<PokemonModel> = this.pokemons.filter((pokemon: PokemonModel) => pokemon.id === id);
    if (pokemon && pokemon.length > 0) pokemon[0].favorito = !pokemon[0].favorito;

    if (this.abaSelected === 0) this.showFavoritos();
  }

  changeAba(aba: number) {
    this.abaSelected = aba;

    if (aba === 0) {
      this.showFavoritos();
      return;
    }

    this.getAllPokemons();
  }

  showFavoritos() {
    this.pokemons = this.joinAllStates()
      .filter((pokemon: PokemonModel) => pokemon.favorito)
      .sort((a: PokemonModel, b: PokemonModel) => a.id - b.id);
  }

  joinAllStates(): Array<PokemonModel> {
    let allPokemons: Array<PokemonModel> = [
      ...this.appState.todos,
      ...this.appState.fire,
      ...this.appState.water,
      ...this.appState.eletric
    ];

    return allPokemons;
  }

  search(event) {
    if (event.target) {
      if (event.target.value) {

        this.pokemons = this.joinAllStates()
          .filter((pokemon: PokemonModel) => (pokemon.id.toString() === event.target.value || pokemon.nome.includes(event.target.value)));
        return;
      }

      this.getAllPokemons();
    }
  }

  verDetalhes(pokemon: PokemonModel) {
    this.appState.detalhado = pokemon;
  }

}
