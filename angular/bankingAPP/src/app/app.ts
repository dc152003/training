import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './components/home/home';
import { Contact } from './components/contactus/contactus';
import { StockPortfolio } from './components/stock-portfolio/stock-portfolio';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Home,Contact,StockPortfolio],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('bankingAPP');
}
