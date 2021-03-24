import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInput, MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { VacationFormComponent } from './vacation-form/vacation-form.component';
import { VacationResultComponent } from './vacation-result/vacation-result.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { VacationCardComponent } from './vacation-card/vacation-card.component';
import { VacationDestinationComponent } from './vacation-destination/vacation-destination.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    VacationFormComponent,
    VacationResultComponent,
    NotFoundComponent,
    VacationCardComponent,
    VacationDestinationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgMultiSelectDropDownModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
