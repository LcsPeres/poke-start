export class PokemonModel {
    id: number;
    nome: string;
    tipos: Array<string> = [];
    imagens: Imagens = new Imagens();
    favorito: boolean = false;
    stats: Array<StatModel> = [];
}

class Imagens {
    front: string;
    back: string;
}

export class StatModel {
    valor: string;
    private _nome: string;

    get nome() {
        return this._nome;
    }

    set nome(nome: string) {
        if (nome.includes('-')) {
            let palavras = nome.split('-');
            nome = palavras[0][0] + '.' + palavras[1];

            if (nome.length > 6) nome = nome.substring(0, 5);
        }

        this._nome = nome;
    }
}