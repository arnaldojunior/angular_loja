import { Component, OnInit } from '@angular/core';
import { Carrinho } from '../carrinho';
import { Location } from '@angular/common';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  carrinho: Carrinho;

  constructor(private location: Location, private produtosService: ProdutosService) { }

  ngOnInit() {
    this.getCarrinho();
  }

  getCarrinho(): void {
    this.carrinho = this.produtosService.getCarrinho();
  }

  goBack(): void {
    this.location.back();
  }
}
