import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu_vertical',
  templateUrl: './menu_vertical.component.html',
  styleUrls: ['./menu_vertical.component.css'],
})
export class Menu_verticalComponent implements OnInit {
  lista: object[] = [
    { name: 'Home', link: '#home' },
    { name: 'Trasparenza Amministrativa', link: '#Trasparenza Amministrativa' },
    { name: 'Bandi e Gare', link: '#Bandi e Gare' },
    { name: 'Albo Pretorio', link: '#Albo Pretorio' }

  ];

  constructor() {}

  ngOnInit() {}
}
