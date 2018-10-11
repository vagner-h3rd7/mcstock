import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ComptComponent } from './component/compt/compt.component';
import { ComptFormComponent } from './component/compt-form/compt-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ComptComponent,
    ComptFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
