import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { AutosComponent } from './components/autos/autos.component';
import { AutoItemComponent } from './components/auto-item/auto-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddAutoComponent } from './components/add-auto/add-auto.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    AutosComponent,
    AutoItemComponent,
    AddAutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]  
})
export class AppModule { }
