import {AbstractControl, ValidatorFn} from "@angular/forms";

export function EmailValidator(control: AbstractControl) {
  const regexp = /(.+)@(.+){2,}\.(.+){2,}/;

  if (!regexp.test(control.value)) {
    return {
      email: true
    };
  }
}
