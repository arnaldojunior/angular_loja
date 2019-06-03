import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from '../produtos.service';
import { Produto } from '../produto';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {

  private produto: Produto = new Produto();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private service: ProdutosService,
  ) { }

  ngOnInit() {
    this.getProduto();
  }

  getProduto(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getProduto(id)
      .subscribe(produto => this.produto = produto);
  }

  addItem(): void {
    this.service.addItem(this.produto);
    this.router.navigate(['./carrinho']);
  }

  voltar(): void {
    this.location.back();
  }
}