import { FormGroup } from '@angular/forms';

export function ConfirmEqual(controlName: string, confirmControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const confirmControl = formGroup.controls[confirmControlName];

        if (!control || !confirmControl) {
          return null;
        }

        if (confirmControl.errors && !confirmControl.errors.confirmEqual) {
            return null;
        }

        if (control.value !== confirmControl.value) {
            confirmControl.setErrors({ confirmEqual: true });
        } else {
            confirmControl.setErrors(null);
        }
    }
}
