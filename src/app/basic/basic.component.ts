import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css'],
})
export class BasicComponent implements OnInit {
  switchstate = 'original';

  constructor() {}

  ngOnInit(): void {}

  setState(state) {
    this.switchstate = state;
    // console.log(state);
  }
}
