import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LeverancierSearchComponent } from './leverancier-search/leverancier-search.component';
import { LeverancierResultModule, LoaderModule, MaterialModule } from '@remia/ui-components';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LeverancierResultModule,
    LoaderModule,
    MaterialModule
  ],
  declarations: [LeverancierSearchComponent],
  exports: [LeverancierSearchComponent]
})
export class LeverancierModule {}
