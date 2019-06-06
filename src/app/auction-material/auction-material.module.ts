import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/typings/icon';
import {MatMenuModule} from '@angular/material/typings/menu';
import {MatButtonModule} from '@angular/material/typings/button';
import {MatInputModule} from '@angular/material/typings/input';
import {MatSelectModule} from '@angular/material/typings/select';
import {MatCardModule} from '@angular/material/typings/card';
import {MatFormFieldModule} from '@angular/material/typings/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/typings/toolbar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatIconModule, MatMenuModule, MatButtonModule, MatInputModule,
    MatSelectModule, MatCardModule, MatFormFieldModule, BrowserAnimationsModule, MatToolbarModule
  ]
})
export class AuctionMaterialModule { }
