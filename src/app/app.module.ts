import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { BookstoreAppComponent } from './components/shared/bookstore-app/bookstore-app.component';
import { FiltersComponent } from './components/shared/bookstore-app/filters/filters.component';
import { ProductItemComponent } from './components/shared/bookstore-app/product-list/product-item/product-item.component';
import { HttpClientModule } from '@angular/common/http';
import { FilmService } from './components/shared/bookstore-app/product-list/product-list.component.service';
import { ProductListComponent } from './components/shared/bookstore-app/product-list/product-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    BookstoreAppComponent,
    FiltersComponent,
    ProductListComponent,
    ProductItemComponent,
    
     ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [FilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
