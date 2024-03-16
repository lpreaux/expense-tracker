import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidators {
  static differentThanZero(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const isZero = control.value === 0;
      return isZero
        ? { differentThanZero: { desc: "must be different than zero" } }
        : null;
    };
  }
}
