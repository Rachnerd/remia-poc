import { Component, Input } from '@angular/core';
import { Leverancier, LeverancierNotFound, LeverancierResult } from '@remia/api-interfaces';

@Component({
  selector: 'ui-leverancier-result',
  templateUrl: './leverancier-result.component.html',
  styleUrls: ['./leverancier-result.component.scss']
})
export class LeverancierResultComponent {
  @Input()
  leverancierResult: LeverancierResult | undefined;

  get leverancier(): Leverancier | undefined {
    if (
      this.leverancierResult &&
      this.leverancierResult.__typename === 'Leverancier'
    ) {
      return this.leverancierResult;
    }
    return undefined;
  }

  get leverancierNotFound(): LeverancierNotFound | undefined {
    if (
      this.leverancierResult &&
      this.leverancierResult.__typename === 'LeverancierNotFound'
    ) {
      return this.leverancierResult;
    }
    return undefined;
  }
}
