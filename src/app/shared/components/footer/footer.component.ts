import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {FooterColumn} from '../../../interfaces/navigation.interface'; // Import RouterLink for navigation links

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  public footerColumns = signal<FooterColumn[]>([
    {
      heading: 'THE BRAND',
      contactInfo: {
        addressLines: [
          'Walchestrasse 9',
          '8006 Zurich'
        ],
        phone: '+ 41 (0) 10 20 30 40',
        fax: '+ 41 (0) 50 60 70 80',
        email: 'contact@thebrand.com'
      }
    },
    {
      heading: 'CUSTOMER CARE',
      links: [
        { label: 'Contact Us', url: '/contact' },
        { label: 'Track your order', url: '/track-order' },
        { label: 'Returns', url: '/returns' },
        { label: 'FAQ\'s', url: '/faqs' },
        { label: 'Location Finder', url: '/locations' },
        { label: 'Service', url: '/service' },
        { label: 'Product Care', url: '/product-care' },
        { label: 'Gift Cards', url: '/gift-cards' },
        { label: 'Sell your jewellery', url: '/sell-jewellery' }
      ]
    },
    {
      heading: 'STAY IN TOUCH',
      links: [
        { label: 'Sign up to our Newsletter', url: '/newsletter' },
        { label: 'Magazine Download', url: '/magazine' }
      ]
    }
  ]);

  public copyrightText = signal('© Copyright 2018 The Brand');

}
