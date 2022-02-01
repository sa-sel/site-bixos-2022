import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-banner-router',
  templateUrl: './banner-router.component.html',
  styleUrls: ['./banner-router.component.scss']
})
export class BannerRouterComponent implements OnInit,OnDestroy {

  sub:any

  constructor(private router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub=this.activatedRoute.url.subscribe(parameter => {
      console.log(parameter)
    })
  }
  ngOnDestroy(): void{
    this.sub.unsubscribe()
  }

}
