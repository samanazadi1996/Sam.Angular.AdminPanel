import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-control-validation',
  templateUrl: './control-validation.component.html',
})
export class ControlValidationComponent {
  @Input() formGroup: any;
  @Input() formControlName: any;
}
