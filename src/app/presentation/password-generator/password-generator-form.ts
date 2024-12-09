import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Injectable({ providedIn: 'root' })
export class PasswordGeneratorForm {
  public generatorForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.generatorForm = this.formBuilder.group({
      uppercase: [true],
      lowercase: [true],
      numbers: [true],
      specialChar: [true],
      passwordLength: [20, [Validators.min(1), Validators.max(50)]],
  });
  }

  reset() {
    this.generatorForm.reset();
  }

  get value() {
    return { ...this.generatorForm.value };
  }

  public get generatorFormGroup() {
    return this.generatorForm
  }

  public get uppercase() {
    return this.generatorForm.get('uppercase');
  }

  public get lowercase() {
    return this.generatorForm.get('lowercase');
  }

  public get numbers() {
    return this.generatorForm.get('numbers');
  }

  public get specialChar() {
    return this.generatorForm.get('specialChar');
  }

  public get passwordLength() {
    return this.generatorForm.get('passwordLength');
  }

}
