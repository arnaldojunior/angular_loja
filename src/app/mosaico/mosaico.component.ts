import { Component, OnInit } from '@angular/core';
import { PRODUTOS } from '../mock-produtos';
import { Produto } from '../produto';
import { Carrinho } from '../carrinho';

@Component({
  selector: 'app-mosaico',
  templateUrl: './mosaico.component.html',
  styleUrls: ['./mosaico.component.css']
})
export class MosaicoComponent implements OnInit {

  produtos;
  carrinho: Carrinho = new Carrinho();

  constructor() { }

  ngOnInit() {
    this.produtos = PRODUTOS;
  }

  addItem(id: number): void {
    console.log("produto: "+ id);
    for (let produto of this.produtos) {
      if (produto.id == id) {
        this.carrinho.addItem(produto);
      }
    }
  }
}
