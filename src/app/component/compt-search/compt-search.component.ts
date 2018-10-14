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

  constructor(public dataService: DataService) { }

  ngOnInit() {
  }
  
  onSearch(e, value): void {
    this.compts = this.dataService.getCompt();

    this.searchString = e.target.value;
    const searchType = 'brand';

    this.filteredCompts = this.compts.filter(filteredCompt =>
      new RegExp(this.searchString.toLocaleLowerCase())
        .test(filteredCompt[searchType].toLocaleLowerCase())
    );
  }

}
