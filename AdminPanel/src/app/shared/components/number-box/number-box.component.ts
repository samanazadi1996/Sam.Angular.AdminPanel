import { ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'app-number-box',
  templateUrl: './number-box.component.html',
})
export class NumberBoxComponent{
  @Input() formGroup: any;
  @Input() formControlName: any;
  @Input() label: string = '';
}
