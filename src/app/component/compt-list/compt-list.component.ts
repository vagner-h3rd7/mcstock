import { Component, OnInit } from '@angular/core';

import { Compt } from '../../models/compt';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-compt-list',
  templateUrl: './compt-list.component.html',
  styleUrls: ['./compt-list.component.css']
})
export class ComptListComponent implements OnInit {
  compts: Compt[];

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.compts = this.dataService.getCompt();
  }

}
