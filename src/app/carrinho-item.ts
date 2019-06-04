import { Produto } from "./produto";

export class CarrinhoItem {
    produto: Produto;
    quantidade: number = 0;

    constructor(produto: Produto) {
        this.produto = produto;
    }

    get valorTotal() {
        return this.produto.valor * this.quantidade;
    }

    incrementar(valor: number) {
        this.quantidade += valor;
    }
}