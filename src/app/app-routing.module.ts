import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ComptComponent } from './component/compt/compt.component';
import { ComptListComponent } from './component/compt-list/compt-list.component';
import { ComptFormComponent } from './component/compt-form/compt-form.component';
import { ComptSearchComponent } from './component/compt-search/compt-search.component';

const routes: Routes = [
  { path: '', redirectTo: '/painel', pathMatch: 'full' },
  { path: 'painel', component: ComptListComponent },
  { path: 'search', component: ComptSearchComponent },
  { path: 'new', component: ComptFormComponent },
  { path: 'detail/:brand', component: ComptComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
