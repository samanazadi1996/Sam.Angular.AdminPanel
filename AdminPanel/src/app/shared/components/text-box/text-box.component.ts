import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html'
})
export class TextBoxComponent {
  @Input() formGroup: any;
  @Input() formControlName: any;
  @Input() label: string = '';
}
