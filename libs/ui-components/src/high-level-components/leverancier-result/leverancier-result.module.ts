import { NgModule } from '@angular/core';
import { LeverancierResultComponent } from './leverancier-result.component';
import { LeverancierNotFoundComponent } from './leverancier-not-found/leverancier-not-found.component';
import { LeverancierComponent } from './leverancier/leverancier.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';

@NgModule({
  declarations: [
    LeverancierResultComponent,
    LeverancierComponent,
    LeverancierNotFoundComponent
  ],
  imports: [CommonModule, MaterialModule],
  exports: [LeverancierResultComponent]
})
export class LeverancierResultModule {}
