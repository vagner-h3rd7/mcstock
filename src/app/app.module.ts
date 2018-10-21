import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ComptComponent } from './component/compt/compt.component';
import { ComptFormComponent } from './component/compt-form/compt-form.component';
import { ComptListComponent } from './component/compt-list/compt-list.component';

import { DataService } from './services/data.service';
import { ComptSearchComponent } from './component/compt-search/compt-search.component';
import { AppRoutingModule } from './app-routing.module';
import { ComptTableComponent } from './component/compt-table/compt-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ComptComponent,
    ComptFormComponent,
    ComptListComponent,
    ComptSearchComponent,
    ComptTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
