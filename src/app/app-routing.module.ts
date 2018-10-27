import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { ComptComponent } from './component/compt/compt.component';
import { ComptListComponent } from './component/compt-list/compt-list.component';
import { ComptFormComponent } from './component/compt-form/compt-form.component';
import { ComptSearchComponent } from './component/compt-search/compt-search.component';
import { ComptTableComponent } from './component/compt-table/compt-table.component';

const routes: Routes = [
  { path: '', redirectTo: '/painel', pathMatch: 'full' },
  { path: 'painel', component: ComptListComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'search', component: ComptSearchComponent },
  { path: 'table', component: ComptTableComponent },
  { path: 'new', component: ComptFormComponent },
  { path: 'detail/:id', component: ComptComponent },
  { path: 'edit/:id', component: ComptFormComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
