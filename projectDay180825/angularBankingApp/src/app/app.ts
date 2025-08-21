import { RouterOutlet, RouterModule, RouterLink } from '@angular/router';


import { Component, signal } from '@angular/core';
import { Whoisthisuser } from './services/whoisthisuser';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-root',

    imports: [RouterOutlet, RouterLink, RouterModule, CommonModule],

    templateUrl: './app.html',

    styleUrl: './app.css'

})

export class App {

    protected readonly title = signal('bankingapp');

    public _whoisthisuser: Whoisthisuser;

    constructor(_whoREF: Whoisthisuser) {

        this._whoisthisuser = _whoREF;

    }

}