import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html'
})
export class InputBoxComponent {
  @Input() formGroup: any;
  @Input() formControlName: any;
  @Input() label: string = '';
  @Input() type: string = 'text';
}
