import { Injectable } from '@angular/core';
import uuidv1 from 'uuid/v1';

import { Compt } from '../models/compt';
import { COMPTS } from '../models/e-compts';

@Injectable({ providedIn: 'root' })
export class DataService {
  compts: Compt[];

  constructor() {
    this.compts = this.getCompt();
  }

  getCompt(): Compt[] {
    if (localStorage.getItem('compts') === null) {
      this.compts = COMPTS;
      localStorage.setItem('compts', JSON.stringify(this.compts));
    } else {
      this.compts = JSON.parse(localStorage.getItem('compts'));
    }

    return this.compts || [];
  }

  addCompt(compt: Compt): void {
    const currentComptIndex = this.compts.findIndex(innerCompt => innerCompt.id === compt.id);

    if (currentComptIndex > -1) {
      this.compts[currentComptIndex] = compt;
    } else {
      this.compts.unshift({...compt, id: uuidv1() });
    }

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

  getComptId(id: string) {
    for (let i = 0; i < this.compts.length; i++) {
      const compt = this.compts[i];
      if (compt.id == id) {
        return compt;
      }
    }
    return null;
}

}
