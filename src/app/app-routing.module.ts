import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MosaicoComponent } from './mosaico/mosaico.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { DetalheComponent } from './detalhe/detalhe.component';

const routes : Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MosaicoComponent },
  { path: 'detalhe/:id', component: DetalheComponent },
  { path: 'carrinho', component: CarrinhoComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
