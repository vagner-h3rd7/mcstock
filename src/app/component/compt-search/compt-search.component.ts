import { Component, OnInit, Input } from '@angular/core';

import { Compt } from '../../models/compt';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-compt-search',
  templateUrl: './compt-search.component.html',
  styleUrls: ['./compt-search.component.css']
})
export class ComptSearchComponent implements OnInit {
  //@Input('compt') compt: Compt;


  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

}
