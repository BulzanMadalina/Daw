import { NgModule } from '@angular/core';

import {
  MatSlideToggleModule,
  MatListModule,
  MatTableModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatTooltipModule,
  MatProgressSpinnerModule,
  MatGridListModule,
  MatProgressBarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatSlideToggleModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatProgressBarModule
  ],
  exports: [
    MatSlideToggleModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatProgressBarModule
  ],
  providers: [
  ],
})
export class AngularMaterialModule { }
