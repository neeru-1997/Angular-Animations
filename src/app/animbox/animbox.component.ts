import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-animbox',
  templateUrl: './animbox.component.html',
  styleUrls: ['./animbox.component.css'],
  animations: [
    trigger('changeState', [
      state(
        'original',
        style({
          backgroundColor: '#47748f',
          transform: 'scale(1)',
        })
      ),
      state(
        'basic',
        style({
          backgroundColor: '#440000',
          transform: 'scale(1.7)',
        })
      ),
      state(
        'delaying',
        style({
          backgroundColor: '#812170',
          transform: 'scale(1.6)',
        })
      ),
      state(
        'easing',
        style({
          backgroundColor: '#985b00',
          transform: 'scale(2.2)',
        })
      ),
      transition('* => basic', animate('800ms')),
      transition('* => original', animate('200ms')),
      transition('* => delaying', animate('800ms 1200ms ease-out')),
      transition('* => easing', animate('800ms ease-in-out')),
    ]),
  ],
})
export class AnimboxComponent implements OnInit {
  @Input() currentState;

  constructor() {}

  ngOnInit(): void {}
}
