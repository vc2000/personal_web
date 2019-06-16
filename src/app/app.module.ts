import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

//component
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { ButtonComponent } from './components/button/button.component';
import { NavComponent } from './components/nav/nav.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';

//services
import {DataService} from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
