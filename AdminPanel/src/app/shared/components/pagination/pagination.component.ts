import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
})
export class PaginationComponent implements OnInit, OnChanges {
  ngOnInit(): void {
    this.generate();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['totalPages'] && !changes['totalPages'].firstChange) {
      this.generate();
    }
  }
  @Input() currentPage?: number;
  @Input() totalPages?: number;

  @Output() pageChanged = new EventEmitter<number>();
  pages: number[] = []
  goToPage(page: number): void {
    if (this.totalPages && this.currentPage) {
      if (page >= 1 && page <= this.totalPages) {
        this.pageChanged.emit(page);
      }
      this.generate()
    }
  }
  generate() {
    if (this.totalPages && this.currentPage) {
      const startpage = Math.max(this.currentPage - 5, 1);
      const endpage = Math.min(startpage + 9, this.totalPages + 1);
  
      this.pages = Array.from({ length: endpage - startpage }, (_, index) => startpage + index);
    }
  }
  }
