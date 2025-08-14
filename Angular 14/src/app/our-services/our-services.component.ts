// services.component.ts
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent implements OnInit {
  services = [
    {
      icon: 'fa-th-large',
      title: 'Category Management',
      description: 'Streamline your business with efficient category organization. Perfect for inventory and product classification.',
      features: [
        'Hierarchical categorization',
        'Category performance tracking',
        'Easy category updates'
      ],
      images: [
        'https://picsum.photos/1920/600?random=5',
        'https://picsum.photos/1920/600?random=6',
        'https://picsum.photos/1920/600?random=7',
        'https://picsum.photos/1920/600?random=8'
      ]
    },
    {
      icon: 'fa-box',
      title: 'Product Management',
      description: 'Complete product lifecycle management with real-time tracking and analytics.',
      features: [
        'Inventory tracking',
        'Price management',
        'Delete Products'
      ],
      images: [
        'https://picsum.photos/1920/600?random=9',
        'https://picsum.photos/id/161/800/400',
        'https://picsum.photos/1920/600?random=10',
        'https://picsum.photos/id/162/800/400'
      ]
    },
    {
      icon: 'fa-file-invoice',
      title: 'Billing System',
      description: 'Fast and efficient billing system with comprehensive reporting capabilities.',
      features: [
        'Quick bill generation',
        'Payment tracking',
        'Financial reports'
      ],
      images: [
        'https://picsum.photos/1920/600?random=11',
        'https://picsum.photos/id/49/800/400',
        'https://picsum.photos/1920/600?random=12',
        'https://picsum.photos/id/50/800/400'
      ]
    }
  ];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true
  };

  constructor() { }

  ngOnInit(): void { }
}
