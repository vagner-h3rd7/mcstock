import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Compt } from '../../models/compt';
import { COMPTS } from './../../models/e-compts';

@Component({
  selector: 'app-compt-form',
  templateUrl: './compt-form.component.html',
  styleUrls: ['./compt-form.component.css']
})
export class ComptFormComponent implements OnInit {

  id: number;
  brand: string;
  model: string;
  motherboard: string;
  processor: string;
  memory_ram: string;
  hard_disck: string;
  uri_photo: string;

  @Output() comptAdded = new EventEmitter<Compt>();

  constructor() { }

  ngOnInit() {
  }

  addCompt() {
    this.comptAdded.emit({
      id: this.id,
      brand: this.brand,
      model: this.model,
      motherboard: this.motherboard,
      processor: this.processor,
      memory_ram: this.memory_ram,
      hard_disck: this.hard_disck,
      uri_photo: this.uri_photo,
	    hide: true
    })

  }

}
