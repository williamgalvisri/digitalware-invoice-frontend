import { Component, Input, OnInit } from '@angular/core';
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
  
  constructor() { }

  ngOnInit(): void {
  }

}
