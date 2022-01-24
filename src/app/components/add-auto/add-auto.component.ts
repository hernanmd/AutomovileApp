import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Automovile } from 'src/app/Automoviles';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-auto',
  templateUrl: './add-auto.component.html',
  styleUrls: ['./add-auto.component.css']
})
export class AddAutoComponent implements OnInit {
  @Output() onAddAutomovile: EventEmitter<Automovile> = new EventEmitter();

  id !: number;
  plate !: number;
  color !: string; 
  showAddAutomovile !: boolean;
  subscription !: Subscription;

  constructor(private uiService: UiService) { 
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddAutomovile = value)
    } 

  ngOnInit(): void {}

  onSubmit(){
    if(!this.plate) {
      alert('Please add an automovile');
      return;
    }

    const newAutomovile = {
      id !: this.id,
      plate !: this.plate,
      color !: this.color
    }

    this.onAddAutomovile.emit(newAutomovile);

    this.plate = 0;
    this.color = '';
  }
}
