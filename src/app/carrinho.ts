import { Produto } from "./produto";
import { CarrinhoItem } from "./carrinho-item";

export class Carrinho {
    itens: CarrinhoItem[] = [];
    valorTotal = 0;

    addItem(produto: Produto, quantidade: number): void {
        let novoItem = true;
        // Percorre todos os itens do carrinho, verificando se o 
        // produto passado já foi adicionado.
        this.itens.forEach(item => {
            if (item.produto.id == produto.id) {
                item.incrementar(quantidade);
                novoItem = false;
            }
        });
        if (novoItem) {
            let item = new CarrinhoItem(produto);
            item.incrementar(quantidade);
            this.itens.push(item); // Adiciona o novo item ao carrinho;
        }
    }

    calcularValorTotal(): void {
        this.valorTotal = 0;
        this.itens.map(item => this.valorTotal += item.valorTotal);
    }
}