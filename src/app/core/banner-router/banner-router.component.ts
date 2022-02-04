import { Component, OnDestroy, OnInit } from '@angular/core'
import { Router, RoutesRecognized } from '@angular/router'
import { ImageModel } from '@models'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-banner-router',
  templateUrl: './banner-router.component.html',
})
export class BannerRouterComponent implements OnInit, OnDestroy {
  subscription!: Subscription
  currentImages!: ImageModel[]
  currentLogo?: ImageModel

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.subscription = this.router.events.subscribe(route => {
      if (route instanceof RoutesRecognized) {
        const data = route.state.root.firstChild?.data ?? {}
        /* eslint-disable dot-notation */
        this.currentImages = data['background']
        this.currentLogo = data['logo']
        /* eslint-enable dot-notation */
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
