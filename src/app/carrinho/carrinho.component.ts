import { Component, OnInit } from '@angular/core';
import { Carrinho } from '../carrinho';
import { Location } from '@angular/common';
import { ProdutosService } from '../produtos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  private carrinho: Carrinho;

  constructor(
    private location: Location,
    private router: Router,
    private produtosService: ProdutosService
  ) { }

  ngOnInit() {
    this.getCarrinho();
    this.carrinho.calcularValorTotal();
  }

  getCarrinho(): void {
    this.carrinho = this.produtosService.getCarrinho();
  }

  goBack(): void {
    this.location.back();
  }

  goToProdutos(): void {
    this.router.navigate(['./main']);
  }
}
