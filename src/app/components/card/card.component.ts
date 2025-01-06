import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-card',
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.css'],
})
export class Card {
  @Input()
  cardId: string = ''
  @Input()
  text1: string =
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do.'
  @Input()
  rootClassName: string = ''
  @Input()
  text: string = 'Business'
  constructor() {}
}
