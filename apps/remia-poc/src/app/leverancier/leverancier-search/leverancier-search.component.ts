import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  LeverancierByIdGQL,
  LeverancierByIdQuery
} from '@remia/api-interfaces';
import { FormControl, Validators } from '@angular/forms';
import {
  debounceTime,
  filter,
  startWith,
  switchMap,
  tap
} from 'rxjs/operators';
import { Subscription } from 'rxjs';

const INITIAL_ID = 1;
const MAX_LENGTH_ID = 6;

const validateIdMaxLength = (max: number) => ({ value }: FormControl) => {
  return !value || value.toString().length <= max
    ? null
    : {
        idTooLong: {
          valid: false
        }
      };
};

@Component({
  selector: 'remia-leverancier-search',
  templateUrl: './leverancier-search.component.html',
  styleUrls: ['./leverancier-search.component.scss']
})
export class LeverancierSearchComponent implements OnInit, OnDestroy {
  private searchSubscription: Subscription;

  idFormControl = new FormControl(INITIAL_ID, [
    Validators.required,
    Validators.pattern('^[0-9]*$'),
    validateIdMaxLength(MAX_LENGTH_ID)
  ]);

  loading = false;

  leverancierResult: LeverancierByIdQuery['leverancier'] | undefined;

  constructor(private leverancierByIdGQL: LeverancierByIdGQL) {}

  ngOnInit() {
    this.searchSubscription = this.idFormControl.valueChanges
      .pipe(
        tap(() => (this.loading = true)),
        filter(id => this.idFormControl.valid && id.toString().length < 7),
        debounceTime(400),
        startWith(INITIAL_ID),
        switchMap(
          (id: string) =>
            this.leverancierByIdGQL.watch({
              id: parseInt(id)
            }).valueChanges
        )
      )
      .subscribe(({ loading, data }) => {
        this.loading = loading;
        this.leverancierResult = data && data.leverancier;
      });
  }

  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }
}
