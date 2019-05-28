import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-mosaico',
  templateUrl: './mosaico.component.html',
  styleUrls: ['./mosaico.component.css']
})
export class MosaicoComponent implements OnInit {

  produtos: Produto[];

  constructor(private produtosService: ProdutosService) { }

  ngOnInit() {
    this.getProdutos();
  }

  getProdutos(): void {
    this.produtosService.buscarProdutos()
      .subscribe(produtos => this.produtos = produtos);
  }

  addItem(item: Produto): void {
    console.log(item);
    this.produtosService.addItem(item);
  }
}