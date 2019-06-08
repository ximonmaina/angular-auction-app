import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatSelectModule, MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
