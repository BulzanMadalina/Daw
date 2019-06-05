import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';


import { AngularMaterialModule } from './shared/angular-material.module';
import { HomeUserComponent } from './home-user/home-user.component';
import { FooterComponent } from './footer/footer.component';
import { ProduseComponent } from './produse/produse.component';
import { ComandaComponent } from './comanda/comanda.component';
import { ContactComponent } from './contact/contact.component';
import { ProdusComponent } from './produs/produs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeUserComponent,
    FooterComponent,
    ProduseComponent,
    ComandaComponent,
    ContactComponent,
    ProdusComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    RouterModule.forRoot([
      { path: '', component: HomeUserComponent, pathMatch: 'full' },
      { path: 'produse', component: ProduseComponent },
      { path: 'produs/:id', component: ProdusComponent },
      { path: 'comanda', component: ComandaComponent },
      { path: 'contact', component: ContactComponent },
    ])
  ],
  exports: [
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
