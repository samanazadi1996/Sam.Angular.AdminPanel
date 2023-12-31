import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TranslateService } from '@ngx-translate/core';
import { GridSettings } from 'src/app/core/services';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  @Input() dataSource = new MatTableDataSource<any>();
  @Input() gridSettings: GridSettings = {
    columnsConfig: [],
  };
  @Input() displayedColumns: string[] = [];
  @Input() selectionKey = 'id';
  @Input() loading = false;
  @Input() gridId = 'grid';
  @Output() onGridSelection = new EventEmitter<{
    selectionKey: string | number;
    selectedRow: any;
  }>();
  selectedRow: any;
  baseImagePath!: string;

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'persian']);
    translate.setDefaultLang('persian');
  }

  ngOnInit(): void {
		this.baseImagePath = `${environment.fileUploaderUrl_}/Download`;
  }

  getRecord(selection: any): void {
    this.selectedRow = selection;
    this.activeSelectionRow(selection[this.selectionKey]);
  }

  activeSelectionRow(selectionKey: number | string): void {
    const rows: any = document.getElementById(this.gridId)!.children[1]
      .children;
    for (let index = 0; index < rows.length; index++) {
      const row = rows[index];
      let rowId = Number(row.children[0].innerText);
      if (selectionKey !== rowId) row.classList.remove('active__row');
      else {
        row.classList.add('active__row');
        this.onGridSelection.emit({
          selectionKey: selectionKey,
          selectedRow: this.selectedRow,
        });
      }
    }
  }
}
