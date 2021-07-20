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
      transition('* => basic', animate('800ms')),
      transition('* => original', animate('200ms')),
    ]),
  ],
})
export class AnimboxComponent implements OnInit {
  @Input() currentState;

  constructor() {}

  ngOnInit(): void {}
}
