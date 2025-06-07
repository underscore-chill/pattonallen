import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'pattonallen-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
}
