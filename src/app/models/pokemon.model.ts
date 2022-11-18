export class PokemonModel {
    id: number;
    nome: string;
    tipos: Array<string> = [];
    imagens: Imagens = new Imagens();
    favorito: boolean = false;
}

class Imagens {
    front: string;
    back: string;
}