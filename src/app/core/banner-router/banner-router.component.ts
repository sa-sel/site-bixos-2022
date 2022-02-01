import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner-router',
  templateUrl: './banner-router.component.html',
  styleUrls: ['./banner-router.component.scss']
})
export class BannerRouterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
