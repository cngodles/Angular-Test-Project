import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PageHomepageComponent } from './page-homepage/page-homepage.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { MainnavComponent } from './mainnav/mainnav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageHomepageComponent,
    PageAboutComponent,
    MainnavComponent
  ],
  imports: [
    BrowserModule,
		HttpClientModule,
		FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
