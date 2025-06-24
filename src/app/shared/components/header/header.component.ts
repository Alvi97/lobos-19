import {Component, HostListener} from '@angular/core';
import {NavItem} from '../../../interfaces/navigation.interface';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink
  ],
  standalone:true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  public navigationItems: NavItem[] = [
    { title: 'WATCHES', link: '/watches', icon: 'watch_icon', isActive: false, sortOrder: 1 },
    { title: 'JEWELLERY', link: '/jewellery', icon: 'jewellery_icon', isActive: false, sortOrder: 2 },
    { title: 'WEDDING', link: '/wedding', icon: 'wedding_icon', isActive: false, sortOrder: 3 },
    { title: 'ACADEMY', link: '/academy', icon: 'academy_icon', isActive: false, sortOrder: 5 },
    { title: 'COMPANY', link: '/company', icon: 'company_icon', isActive: false, sortOrder: 6 },
    { title: 'STORIES', link: '/stories', icon: 'stories_icon', isActive: false, sortOrder: 7 }
  ];

  public isMobile = window.innerWidth <= 800;

  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth <= 800;
  }

}
