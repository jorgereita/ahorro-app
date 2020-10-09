import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';

import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
const routes: Routes = [
  { path: "home", component: HomeComponent,  },
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
 
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    ChartsModule, 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
