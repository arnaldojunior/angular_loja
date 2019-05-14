import { Produto } from "./produto";

export class Carrinho {
    produtos: Produto[] = [];
    valorTotal: number = 0;

    addItem(produto: Produto): void {
        this.produtos.push(produto);
        this.valorTotal += produto.valor;
    }
    
    calcularValorTotal(): number {
        for (let produto of this.produtos) {
            this.valorTotal += produto.valor;
        }
        return this.valorTotal;
    }
}