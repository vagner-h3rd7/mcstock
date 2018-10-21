import { Component, OnInit } from '@angular/core';

import { Compt } from '../../models/compt';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-compt-table',
  templateUrl: './compt-table.component.html',
  styleUrls: ['./compt-table.component.css']
})
export class ComptTableComponent implements OnInit {
  compts: Compt[];

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.compts = this.dataService.getCompt();
  }

}
