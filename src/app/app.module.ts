import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterbarComponent } from './footerbar/footerbar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TeknofestComponent } from './teknofest/teknofest.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CertificatesComponent,
    NavbarComponent,
    FooterbarComponent,
    TeknofestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
