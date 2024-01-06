import { Component, Input } from '@angular/core';
import { GridSettings } from 'src/app/core/services/gridSettings';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent {
  @Input() dataSource: any[] = [];
  @Input() gridSettings: GridSettings = {
    columnsConfig: [],
    acionConfig: []
  };
}