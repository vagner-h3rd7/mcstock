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
    
      /*
      for(var customradios:HTMLElement =document.getElementsByName("customRadio1"),i=0;i<customradios.length;i++)if(customradios[i].checked)
      if("brand"==customradios[i].value){var searchType="brand";alert("Marca")}
      else if("model"==customradios[i].value){var searchType="model";alert("Modelo")}
      else if("motherboard"==customradios[i].value){var searchType="motherboard";alert("P-Mae")}
      else if("processor"==customradios[i].value){var searchType="processor";alert("Proc")}
      else if("memoryram"==customradios[i].value){var searchType="memory_ram";alert("M-RAM")}
      else if("harddisck"==customradios[i].value){var searchType="hard_disck";alert("HD")}
      else if("id"==customradios[i].value){var searchType="id";alert("Id")}
      */

     const searchType = "brand";


    this.filteredCompts = this.compts.filter(filteredCompt =>
      new RegExp(this.searchString.toLocaleLowerCase())
        .test(filteredCompt[searchType].toLocaleLowerCase())
    );
  }

}
