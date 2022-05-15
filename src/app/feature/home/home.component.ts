import { Component, OnInit } from '@angular/core';
import { InitialMethods } from 'src/app/core/models/interfaces/initial-method.interface';
import { TitleService } from 'src/app/core/services/title.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, InitialMethods {

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.initialSettingComponent()
    this.initialSubscription()
  }

  initialSubscription(): void {};

  initialSettingComponent() {
    this.settingTitle()
  }

  settingTitle() {
    this.titleService.emmitTitle({
      title: 'Inicio',
    })
  }
}
