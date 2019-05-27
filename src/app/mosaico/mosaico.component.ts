import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutosService } from '../produtos.service';
import { Categoria } from '../categoria';

@Component({
  selector: 'app-mosaico',
  templateUrl: './mosaico.component.html',
  styleUrls: ['./mosaico.component.css']
})
export class MosaicoComponent implements OnInit {

  produtos: Produto[];
  categorias: Categoria[];

  constructor(private produtosService: ProdutosService) { }

  ngOnInit() {
    this.getProdutos();
    this.getCategorias();
  }

  getProdutos(): void {
    this.produtosService.produtos
      .subscribe(produtos => this.produtos = produtos);
  }

  getCategorias(): void {
    this.produtosService.categorias
      .subscribe(categorias => this.categorias = categorias);
  }

  addItem(item: Produto): void {
    console.log(item);
    this.produtosService.addItem(item);
  }
}