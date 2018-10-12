import { Component, OnInit, Input } from '@angular/core';

import { Compt } from '../../models/compt';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-compt',
  templateUrl: './compt.component.html',
  styleUrls: ['./compt.component.css']
})
export class ComptComponent implements OnInit {
  @Input('compt') compt: Compt;

  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

  removeCompt(compt: Compt) {
    const response = confirm('Tem certeza de que deseja excluir?');
    if (response) {
      this.dataService.removeCompt(compt);
    }
  }

}
