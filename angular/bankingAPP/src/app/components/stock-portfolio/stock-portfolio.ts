import { CurrencyPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stock-portfolio',
  standalone: true,
  imports: [NgFor, CurrencyPipe],
  templateUrl: './stock-portfolio.html',
  styleUrl: './stock-portfolio.css'
})



export class StockPortfolio {
  stocks = [
    { stockId: 'AAPL', qty: 10, purchasePrice: 150, currentPrice: 170 },
    { stockId: 'GOOGL', qty: 5, purchasePrice: 1200, currentPrice: 1100 },
    { stockId: 'MSFT', qty: 8, purchasePrice: 200, currentPrice: 210 },
    { stockId: 'TSLA', qty: 3, purchasePrice: 700, currentPrice: 650 },
    { stockId: 'AMZN', qty: 2, purchasePrice: 3000, currentPrice: 3200 },
    { stockId: 'NFLX', qty: 4, purchasePrice: 500, currentPrice: 480 },
    { stockId: 'NVDA', qty: 6, purchasePrice: 400, currentPrice: 450 },
    { stockId: 'FB', qty: 7, purchasePrice: 250, currentPrice: 240 },
    { stockId: 'BABA', qty: 9, purchasePrice: 180, currentPrice: 190 },
    { stockId: 'INTC', qty: 10, purchasePrice: 50, currentPrice: 55 }
  ];

  get totalInvestment(): number {
    return this.stocks.reduce((sum, stock) => sum + stock.qty * stock.purchasePrice, 0);
  }

  get portfolioValue(): number {
    return this.stocks.reduce((sum, stock) => sum + stock.qty * stock.currentPrice, 0);
  }

  get overallStatus(): string {
    return this.portfolioValue >= this.totalInvestment ? 'Overall Profit' : 'Overall Loss';
  }

  getStockStatus(stock: any): string {
    const invested = stock.qty * stock.purchasePrice;
    const current = stock.qty * stock.currentPrice;
    return current >= invested ? 'Profit' : 'Loss';
  }
}
