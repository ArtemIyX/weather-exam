import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { WeathercardComponent } from './components/weathercard/weathercard.component';
import { MainComponent } from './components/main/main.component';
import { DaySelectorComponent } from './components/day-selector/day-selector.component';
import { DayConverterPipe } from './pipes/day-converter.pipe';
import { DayNumberConverterPipe } from './pipes/day-number-converter.pipe';
import { MonthConverterPipe } from './pipes/month-converter.pipe';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NotFoundComponent,
    WeathercardComponent,
    DaySelectorComponent,
    DayConverterPipe,
    DayNumberConverterPipe,
    MonthConverterPipe,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgbModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
