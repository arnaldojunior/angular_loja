import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutosService } from '../produtos.service';
import { Produto } from '../produto';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {

  private produto: Produto = new Produto();

  constructor(
    private route: ActivatedRoute,
    private service: ProdutosService
  ) { }

  ngOnInit() {
    this.getProduto();
  }

  getProduto(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getProduto(id)
      .subscribe(produto => this.produto = produto);
  }
}