import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Compt } from '../../models/compt';
import { DataService } from './../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-compt-form',
  templateUrl: './compt-form.component.html',
  styleUrls: ['./compt-form.component.css']
})
export class ComptFormComponent implements OnInit {

  subsc: Subscription;

  compts: any;
  compt: Compt;
  forml: FormGroup;

  uri_photo = 'src\\assets\\img\\default_img.jpg';

  changeImage(e): void {
    const reader = new FileReader();

    reader.onload = loadedFile => {
      const data = loadedFile.target.result;
      this.uri_photo = data;
    };
    reader.readAsDataURL(e.target.files[0]);
  }

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
    ) { }

  ngOnInit() {
    this.forml = this.formBuilder.group({
      id: [null],
      brand: [null],
      model: [null],
      motherboard: [null],
      processor: [null],
      memory_ram: [null],
      hard_disck: [null] ,
      uri_photo: [null],
      hide: true
    });

    this.subsc = this.route.params.subscribe(
      (params: any) => {
        const id = params['id'];
        this.compts = this.dataService.getComptId(id);
        this.forml.patchValue(this.compts);
        this.uri_photo = this.compts.uri_photo;
      });
  }

  ngOnDestroy() {
    this.subsc.unsubscribe();
  }

  onSubmit() {
    this.compt = this.forml.value;
    this.compt.uri_photo = this.uri_photo;
    this.dataService.addCompt(this.compt);
    this.router.navigate(['/']);
  }

  resetForm() {
    this.forml.reset();
  }
}
