import { Component, Input, OnInit } from '@angular/core';
import { selectBoxOption } from 'src/app/core/services/selectBoxOption';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.css']
})
export class SelectBoxComponent implements OnInit {
  ngOnInit(): void {
    this.value = this.formGroup.get(this.formControlName)?.value
  }
  value?: number;

  @Input() formGroup: any;
  @Input() formControlName: any;
  @Input() label: string = '';
  @Input() options?: selectBoxOption[]
  valueChanged() {
    this.formGroup.get(this.formControlName).setValue(Number.parseInt(this.value+''));
  }
}
