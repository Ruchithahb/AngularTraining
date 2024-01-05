import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { NotificationComponent } from './notification/notification.component';
import { ProductsComponent } from './products/products.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { FiltComponent } from './filt/filt.component';
import { HooksComponent } from './hooks/hooks.component';
import { PipeComponent } from './pipe/pipe.component';
import { FormatPricePipe, } from './price.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderComponent,
    NavComponent,
    NotificationComponent,
    ProductsComponent,
    SearchComponent,
    SignupComponent,
    AboutComponent,
    FiltComponent,
    HooksComponent,
    PipeComponent,
    FormatPricePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
