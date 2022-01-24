import { Component, OnInit } from '@angular/core';
import { AutoService } from 'src/app/services/auto.service';
import { Automovile } from '../../Automoviles';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.css']
})
export class AutosComponent implements OnInit {

  autos: Automovile[] = []; 
  constructor(private autoService: AutoService) { }

  ngOnInit(): void {
    this.autoService.getAutos().subscribe((autos) => this.autos = autos);
  }

  deleteAuto(auto: Automovile) {
    this.autoService
      .deleteAuto(auto)
      .subscribe(
        () => (this.autos = this.autos.filter((a) => a.plate !== auto.plate)));
  }

  addAutomovile(auto: Automovile) {
    // console.log(auto);
    this.autoService.addAutomovile(auto)
      .subscribe((auto) => (this.autos.push(auto)));
  }

 }
