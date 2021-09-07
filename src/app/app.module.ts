import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BoolToYNPipe } from './bool-to-yn.pipe';
import { PersonComponent } from './person/person.component';
import { StrToDatePipe } from './str-to-date.pipe';
import { TOFPipe } from './t-of.pipe';

const routes : Routes= [

];

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    StrToDatePipe,
    BoolToYNPipe,
    TOFPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
