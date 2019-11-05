import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-to-do',
  templateUrl: './list-to-do.component.html',
  styleUrls: ['./list-to-do.component.css']
})
export class ListToDoComponent implements OnInit {

  todos = [
    {id: 1, description: 'Learn to dance', state:'false'},
    {id: 2, description: 'Learn to programming', state:'false'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
