import { Produto } from "./produto";

export class Carrinho {
    produtos: Produto[] = [];
    valorTotal: number = 0;

    addItem(produto: Produto): void {
        this.produtos.push(produto);
    }
    
    calcularValorTotal(): void {
        this.valorTotal = 0;
        this.produtos.map(produto => this.valorTotal += produto.valor);
    }
}