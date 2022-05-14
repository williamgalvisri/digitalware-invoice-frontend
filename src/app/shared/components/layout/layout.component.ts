import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data, NavigationEnd, Router, RoutesRecognized } from '@angular/router';
import { Subscription } from 'rxjs';
import { menuOptions } from 'src/app/core/constants/menu.constants';
import { DataRouteInterface } from 'src/app/core/models/interfaces/menu.interface';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, OnDestroy {
  public menu = menuOptions;
  public header!: DataRouteInterface 

  private routeSubscription$!: Subscription;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initSubscriptions()
  }

  ngOnDestroy(): void {
    this.routeSubscription$?.unsubscribe()
  }

  private initSubscriptions() {
    this.initSubscriptionRoute()
  }


  private initSubscriptionRoute() {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((r: any) => {
      const data = this.menu.find(m => m.route === r.url)?.data
      if (data) {
        this.header = data
      }
    })
  }
}
