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
    this.subscription = this.router.events.subscribe(data => {
      if (data instanceof RoutesRecognized) {
        this.currentImages = data.state.root.firstChild?.data['background']
        this.currentLogo = data.state.root.firstChild?.data['logo']
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
