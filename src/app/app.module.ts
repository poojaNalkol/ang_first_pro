import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentComponent } from './shared/components/student/student.component';
import { ProductcomponantComponent } from './shared/components/productcomponant/productcomponant.component';
import { FruitsComponent } from './shared/components/fruits/fruits.component';
        
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ProductcomponantComponent,
    FruitsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
