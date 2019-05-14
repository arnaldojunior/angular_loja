import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: string;
  senha: string;
  mensagem: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logar(): void {
    if (this.usuario == 'teste' && this.senha == 'teste') {
      this.router.navigate(['/main']);
    } else {
      this.mensagem = "Login incorreto!";
    }
  }
}
