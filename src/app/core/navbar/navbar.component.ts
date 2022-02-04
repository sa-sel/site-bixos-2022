import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core'
import { Router } from '@angular/router'
import { SidebarComponent } from '@core'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  @Input() isBelowBanner = true

  @ViewChild('navbar') navbarRef!: ElementRef

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (this.isBelowBanner) {
      /* eslint-disable no-undef */
      window.addEventListener('scroll', () => {
        // if a whole page was scrolled
        window.scrollY > window.innerHeight ? this.setSticky() : this.unsetSticky()
      })
      /* eslint-enable no-undef */
    } else {
      this.setSticky()
    }
  }

  ngOnDestroy(): void {
    this.unsetSticky()
  }

  // TODO
  openSidebar(): void {
    // SidebarComponent.??
    console.log('open sidebar')
  }

  goToHomepage(): void {
    this.router.navigate(['/'])
  }

  private setSticky() {
    const navbar = this.navbarRef?.nativeElement
    navbar.classList.add('fixed-top')
    document.body.style.paddingTop = `${navbar.offsetHeight}px` // eslint-disable-line
  }

  private unsetSticky() {
    const navbar = this.navbarRef?.nativeElement
    navbar.classList.remove('fixed-top')
    document.body.style.paddingTop = '0' // eslint-disable-line
  }
}
