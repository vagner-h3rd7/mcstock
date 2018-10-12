import { Injectable } from '@angular/core';

import { Compt } from '../models/compt';

@Injectable({ providedIn: 'root' })
export class DataService {

  // exemplo
  compts: Compt[] = [
    { brand: 'sPc1', model: 'exemp sPcPro1', motherboard: 'proprietary-1', processor: 'itl y8 7800 - 3.00 GHz',
    memory_ram: 'KingsRam - 8GB', hard_disck: 'SanHD - 1 TB', uri_photo: 'src\\assets\\img\\img_01.jpg', hide: true},
    { brand: 'sPc2', model: 'exemp sPcPro2', motherboard: 'proprietary-2', processor: 'itl y8 7800 - 3.00 GHz',
    memory_ram: 'KingsRam - 4GB', hard_disck: 'SanHD - 2 TB', uri_photo: 'src\\assets\\img\\img_02.jpg', hide: true},
    { brand: 'sPc3', model: 'exemp sPcPro3', motherboard: 'proprietary-3', processor: 'itl y9 7900 - 6.00 GHz',
    memory_ram: 'KingsRam - 16GB', hard_disck: 'SanHD - 1 TB', uri_photo: 'src\\assets\\img\\img_03.jpg', hide: true},
    { brand: 'sPc4', model: 'exemp sPcPro4', motherboard: 'proprietary-4', processor: 'itl y8 7800 - 3.00 GHz',
    memory_ram: 'KingsRam - 4GB', hard_disck: 'SanHD - 4 TB', uri_photo: 'src\\assets\\img\\img_04.jpg', hide: true}
  ];


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

  addCompt(compt: Compt): void {
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

  removeCompt(compt: Compt) {
    for (let i = 0; this.compts.length; i++ ) {
      if (compt === this.compts[i]) {
        this.compts.splice(i, 1);
        localStorage.setItem('compts', JSON.stringify(this.compts));
      }
    }
  }

}
