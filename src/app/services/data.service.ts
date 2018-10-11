import { Injectable } from '@angular/core';

import { Compt } from '../models/compt';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  compts: Compt[];

  constructor() { }
}
