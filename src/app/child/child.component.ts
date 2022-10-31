import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input()
  key1: any;

  @Output()
  key2 = new EventEmitter<string>();

  fun1() {
    this.key2.emit('Hey Parent!!');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
