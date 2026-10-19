import { Component, OnInit, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login implements OnInit {
  constructor(private renderer: Renderer2) {
    this.renderer.addClass(document.body, 'login-page');
  }

  ngOnInit(): void {}
}