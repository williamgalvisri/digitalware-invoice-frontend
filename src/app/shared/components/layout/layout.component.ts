import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { menuOptions } from 'src/app/core/constants/menu.constants';
import { TitleService } from 'src/app/core/services/title.service';
import { TitleInterface } from 'src/app/core/models/interfaces/title.interface';
import { InitialMethods } from 'src/app/core/models/interfaces/initial-method.interface';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, OnDestroy, InitialMethods {
  public menu = menuOptions;
  public header!: TitleInterface 
  public isLoading: boolean = false;
  private titleSubscription$!: Subscription;
  private serviceSubscription$!: Subscription;
  constructor(private titleService: TitleService, private loadingService: LoadingService) {}

  ngOnInit(): void {
    this.initialSubscription()
  }

  ngOnDestroy(): void {
    this.titleSubscription$?.unsubscribe()
    this.serviceSubscription$?.unsubscribe();
  }

  initialSubscription() {
    this.initSubscriptionTitle();
    this.initiSubscriptionLoading();
  }


  private initSubscriptionTitle() {
    this.titleSubscription$ = this.titleService.listenTitleEmissions().subscribe((titleInformation) => {
      this.header = titleInformation
    })
  }

  private initiSubscriptionLoading() {
    this.serviceSubscription$ = this.loadingService.onListenLoading().subscribe((isLoading) =>{
      this.isLoading = isLoading;
    })
  }
}
