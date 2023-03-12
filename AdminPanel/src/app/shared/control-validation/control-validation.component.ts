import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-control-validation',
  templateUrl: './control-validation.component.html',
})
export class ControlValidationComponent {
  @Input() formGroup:any;
  @Input() field: string = '';
}
