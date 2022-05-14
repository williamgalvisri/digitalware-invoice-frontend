import { Component, Input, OnInit } from '@angular/core';
import { MenuInterface } from 'src/app/core/models/interfaces/menu.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() options: MenuInterface[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
