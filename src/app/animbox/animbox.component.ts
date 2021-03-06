import {
  animate,
  group,
  keyframes,
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
      state(
        'stepped',
        style({
          backgroundColor: '#549a76',
          transform: 'scale(1)',
        })
      ),
      state(
        'parallel',
        style({
          backgroundColor: '#065e65',
          transform: 'scale(0.4)',
        })
      ),
      transition('* => basic', animate('800ms')),
      transition('* => original', animate('200ms')),
      transition('* => delaying', animate('800ms 1200ms ease-out')),
      transition('* => easing', animate('800ms ease-in-out')),
      transition(
        '* => stepped',
        animate(
          '1000ms ease-in-out',
          keyframes([
            style({
              backgroundColor: '#dd9344',
              transform: 'scale(1.4)',
              offset: '0.2',
            }),
            style({
              backgroundColor: '#5c2346',
              transform: 'scale(0.8)',
              offset: '0.4',
            }),
            style({
              backgroundColor: '#1b1b1b',
              transform: 'scale(1.2)',
              offset: '0.7',
            }),
            style({
              backgroundColor: '#dd9344',
              transform: 'scale(1)',
              offset: '0.9',
            }),
          ])
        )
      ),
      transition('* => parallel', [
        group([
          animate(
            '1000ms ease-out',
            style({
              backgroundColor: '#065e65',
            })
          ),
          animate(
            '2000ms ease-out',
            style({
              transform: 'scale(0.4)',
            })
          ),
        ]),
      ]),
    ]),
  ],
})
export class AnimboxComponent implements OnInit {
  @Input() currentState;
  msg = 'rest';

  constructor() {}

  ngOnInit(): void {}

  animationBegin(e) {
    this.msg =
      e.phaseName +
      ': ' +
      e.fromState +
      ' => ' +
      e.toState +
      ' [' +
      e.totalTime +
      '] ';
  }

  animationEnd(e) {
    this.msg =
      e.phaseName +
      ': ' +
      e.fromState +
      ' => ' +
      e.toState +
      ' [' +
      e.totalTime +
      '] ';

    setTimeout(() => {
      this.msg = '';
    }, 3000);
  }
}
