import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, FormGroup } from '@angular/forms';

import { ConfirmEqual } from '../validators/confirm-equal.validator';

@Directive({
  selector: '[confirmEqual]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ConfirmEqualValidatorDirective, multi: true }]
})

export class ConfirmEqualValidatorDirective implements Validator {

  @Input('confirmEqual') confirmEqual: string[] = [];

    validate(formGroup: FormGroup): ValidationErrors {
        return ConfirmEqual(this.confirmEqual[0], this.confirmEqual[1])(formGroup);
    }

}
