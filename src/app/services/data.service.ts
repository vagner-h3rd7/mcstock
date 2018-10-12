import { Injectable } from '@angular/core';

import { Compt } from '../models/compt';
@Injectable({ providedIn: 'root' })
export class DataService {
  compts: Compt[];

  constructor() { 
    this.compts = [];
  }

  getCompt(): Compt[] {
    if (localStorage.getItem('compts') === null) {
      this.compts = [];
    } else {
      this.compts = JSON.parse(localStorage.getItem('compts'));
    }
    return this.compts;
  }

  addCompt(compt: Compt):void {
    this.compts.unshift(compt);
    let compts;
    if (localStorage.getItem('compts') === null) {
      compts = [];
      compts.unshift(compts);
      localStorage.setItem('compts', JSON.stringify(compts));
    } else {
      compts = JSON.parse(localStorage.getItem('compts'));
      compts.unshift(compt);
      localStorage.setItem('compts', JSON.stringify(compts));
    }

  }

  removeCompt(compt: Compt){
    for (let i = 0; this.compts.length; i++ ) {
      if (compt == this.compts[i]) {
        this.compts.splice(i, 1);
        localStorage.setItem('compts', JSON.stringify(this.compts));
      }
    }
  }

}
