import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { fadeAnimation } from '../animations';

@Component({
  selector: 'app-fadeblock',
  templateUrl: './fadeblock.component.html',
  styleUrls: ['./fadeblock.component.css'],
  animations: [
    trigger('changeState', [
      transition('void => *', [
        useAnimation(fadeAnimation, {
          params: {
            delay: '1000ms',
            from: 1,
            to: 0,
            time: '2s',
          },
        }),
      ]),
    ]),
  ],
})
export class FadeblockComponent implements OnInit {
  @Input() currentState;
  constructor() {}

  ngOnInit(): void {}
}
