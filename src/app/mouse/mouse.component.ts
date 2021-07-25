import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mouse',
  templateUrl: './mouse.component.html',
  styleUrls: ['./mouse.component.css'],
  animations: [
    trigger('changeState', [
      state(
        'rest',
        style({
          transform: 'scale(1)',
        })
      ),
      state(
        'hover',
        style({
          transform: 'scale(1.2)',
        })
      ),
      state(
        'press',
        style({
          transform: 'scale(1.2)',
          backgroundColor: '#8f5a7a',
        })
      ),
      transition('rest => hover', animate('400ms ease-in')),
      transition('hover => rest', animate('200ms ease-out')),
      transition('hover => press', animate('400ms ease-in')),
      transition('press => rest', animate('200ms ease-out')),
    ]),
  ],
})
export class MouseComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  currentState = 'rest';
  setMouse(state) {
    this.currentState = state;
  }
}
