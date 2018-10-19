import { Injectable } from '@angular/core';

import { Compt } from '../models/compt';
import { COMPTS } from '../models/e-compts';

@Injectable({ providedIn: 'root' })
export class DataService {
  compts: Compt[];

  constructor() {
    this.compts = COMPTS;
  }

  getCompt(): Compt[] {
    if (localStorage.getItem('compts') === null) {
      this.compts = COMPTS;
      localStorage.setItem('compts', JSON.stringify(this.compts));
    } else {
      this.compts = JSON.parse(localStorage.getItem('compts'));
    }
    return this.compts;
  }

  addCompt(compt: Compt): void {
    this.compts.unshift(compt);
   
      localStorage.setItem('compts', JSON.stringify(this.compts));

  }

  removeCompt(compt: Compt) {
    for (let i = 0; this.compts.length; i++ ) {
      if (compt === this.compts[i]) {
        this.compts.splice(i, 1);
        break;
      }
    }
    localStorage.setItem('compts', JSON.stringify(this.compts));
  }

  getComptId(id: number) {
    for (let i=0; i<this.compts.length; i++){
      let compt = this.compts[i];
      if (compt.id == id){
        return compt;
      }
    }
    return null;
}

}
