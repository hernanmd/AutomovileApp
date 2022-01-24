import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Automovile } from 'src/app/Automoviles';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-auto-item',
  templateUrl: './auto-item.component.html',
  styleUrls: ['./auto-item.component.css']
})
export class AutoItemComponent implements OnInit {
  @Input() auto!: Automovile;
  @Output() onDeleteAuto: EventEmitter<Automovile> = new EventEmitter()
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {}

  onDelete(auto: any) {
    //console.log(auto);
    this.onDeleteAuto.emit(auto);
  }
}
