import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from './card/card.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [CardComponent, ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [CardComponent, MatButtonModule ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, ],
})
export class AngularMaterialModule { }
