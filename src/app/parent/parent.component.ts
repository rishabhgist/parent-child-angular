import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  data: string = '';
  fun2(childData: any) {
    this.data = childData;
  }
  constructor() { }

  ngOnInit(): void {
  }

}