import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ColumnsInterface } from 'src/app/core/models/interfaces/table.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() columns: ColumnsInterface[] = []
  @Input() data: any[] = []
  @Input() identifiers: string = 'id';
  @Input() isLoading: boolean = false;
  @Output() onEmmiSelectedRow = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleRowClick(e: any) {
    if(e.rowType === "data") {
        this.onEmmiSelectedRow.emit(e.data)
    }
  }

}
