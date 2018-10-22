import { Component, OnInit, Input } from '@angular/core';

import { Compt } from '../../models/compt';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-compt-search',
  templateUrl: './compt-search.component.html',
  styleUrls: ['./compt-search.component.css']
})
export class ComptSearchComponent implements OnInit {
  @Input() compt: Compt;
  compts: Compt[];
  filteredCompts: Compt[];
  searchString: string;
  options: any;
  searchType: string = 'brand';

  constructor(public dataService: DataService) {
    this.options = [
      {
        type: 'model',
        text: 'Modelo'
      },
      {
        type: 'motherboard',
        text: 'Placa Mãe'
      },
      {
        type: 'processor',
        text: 'Processador'
      },
      {
        type: 'memoryram',
        text: 'Memoria RAM'
      },
      {
        type: 'harddisck',
        text: 'Disco Rigido'
      },
      {
        type: 'id',
        text: 'Id'
      }
    ]
  }

  ngOnInit() {
  }

  onSearch(e, searchType): void {
    this.compts = this.dataService.getCompt();

    this.searchString = e.target.value;

    this.filteredCompts = this.compts.filter(filteredCompt =>
      new RegExp(this.searchString.toLocaleLowerCase())
        .test(filteredCompt[this.searchType].toLocaleLowerCase())
        ,console.log(this.searchType)
    );
  }

}
