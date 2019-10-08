import { Component, Input, OnInit } from '@angular/core';
import { Leverancier } from '@remia/api-interfaces';

@Component({
  selector: 'ui-leverancier',
  templateUrl: './leverancier.component.html',
  styleUrls: ['./leverancier.component.scss']
})
export class LeverancierComponent implements OnInit {
  @Input()
  leverancier: Leverancier;

  constructor() {}

  ngOnInit() {}
}
