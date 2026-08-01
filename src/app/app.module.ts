import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentComponent } from './shared/components/student.component';
import { ProductcomponantComponent } from './productcomponant/productcomponant.component';
        
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ProductcomponantComponent, 
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
