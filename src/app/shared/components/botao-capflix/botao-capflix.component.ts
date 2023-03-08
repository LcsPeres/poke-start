import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'botao-capflix',
  templateUrl: './botao-capflix.component.html',
  styleUrls: ['./botao-capflix.component.scss']
})
export class BotaoCapflixComponent implements OnInit {

  @Input() texto: string = 'SIGN IN';
  @Input('classIcone') icone: string = '';
  @Input() fundo: string = '';

  constructor() { }

  ngOnInit() {
  }

}
