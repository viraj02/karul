import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { CardComponent } from './card/card.component';
import { MatButtonModule } from '@angular/material/button';
import { FeedbackComponent } from './feedback/feedback.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [CardComponent, FeedbackComponent, ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  exports: [CardComponent, MatButtonModule ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, ],
})
export class AngularMaterialModule { }
