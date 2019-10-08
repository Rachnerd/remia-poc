import { Component, Input, OnInit } from '@angular/core';
import { LeverancierNotFound } from '@remia/api-interfaces';


@Component({
  selector: 'ui-leverancier-not-found',
  templateUrl: './leverancier-not-found.component.html',
  styleUrls: ['./leverancier-not-found.component.scss']
})
export class LeverancierNotFoundComponent implements OnInit {
  @Input()
  leverancierNotFound: LeverancierNotFound;

  constructor() {}

  ngOnInit() {}
}
