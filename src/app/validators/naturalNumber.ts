import {AbstractControl, ValidatorFn} from "@angular/forms";

export function NaturalNumberValidator(control: AbstractControl) {
  const value: number = control.value;
  if (isNaN(value) || Math.round(value) !== value || value <= 0) {
    return {
      naturalNumber: true
    };
  }
};
