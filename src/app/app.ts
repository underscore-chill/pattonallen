import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { RouterOutlet } from '@angular/router';
import { PageLoader } from './components/pageloader';

@Component({
  selector: 'lexigray-root',
  imports: [RouterOutlet, Header, Footer, PageLoader],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
