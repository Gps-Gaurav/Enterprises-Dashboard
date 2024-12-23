import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    dots: true,
    navSpeed: 700,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  };

  carouselImages = [
    {
      url: 'https://picsum.photos/1920/600?random=1',
      title: 'Welcome to Our Enterprises Dashboard',
      description: 'Manage and monitor your data efficiently'
    },
    {
      url: 'https://picsum.photos/1920/600?random=2',
      title: 'Real-time Analytics',
      description: 'Track your performance metrics instantly'
    },
    {
      url: 'https://picsum.photos/1920/600?random=3',
      title: 'Comprehensive Reports',
      description: 'Get detailed insights into your business'
    },
    {
      url: 'https://picsum.photos/1920/600?random=4',
      title: 'Generated Bills and Invoices',
      description: 'Get detailed insights into your business'
    }
  ];

  constructor() { }

  ngOnInit(): void { }
}
