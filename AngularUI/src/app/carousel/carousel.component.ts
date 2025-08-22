import { Component, OnInit, Input, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

export interface CarouselItem {
  url: string;
  title?: string;
  description?: string;
  alt?: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit {

  @Input() items: CarouselItem[] = [];
  @Input() height: string = '400px';
  @Input() showOverlay: boolean = true;
  @Input() showNavigation: boolean = true;
  @Input() showDots: boolean = true;
  @Input() autoplay: boolean = true;
  @Input() autoplayTimeout: number = 5000;

  customOptions: OwlOptions = {};

  defaultItems: CarouselItem[] = [
    {
      url: 'https://picsum.photos/1920/600?random=1',
      title: 'Welcome to Our Enterprises Dashboard',
      description: 'Manage and monitor your data efficiently',
      alt: 'Dashboard overview'
    },
    {
      url: 'https://picsum.photos/1920/600?random=2',
      title: 'Real-time Analytics',
      description: 'Track your performance metrics instantly',
      alt: 'Analytics dashboard'
    },
    {
      url: 'https://picsum.photos/1920/600?random=3',
      title: 'Comprehensive Reports',
      description: 'Get detailed insights into your business',
      alt: 'Reports interface'
    },
    {
      url: 'https://picsum.photos/1920/600?random=4',
      title: 'Generated Bills and Invoices',
      description: 'Get detailed insights into your business',
      alt: 'Billing system'
    }
  ];

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.customOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      dots: this.showDots,
      navSpeed: 700,
      navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
      responsive: {
        0: {
          items: 1
        }
      },
      nav: this.showNavigation,
      autoplay: this.autoplay,
      autoplayTimeout: this.autoplayTimeout,
      autoplayHoverPause: true
    };

    if (this.items.length === 0) {
      this.items = this.defaultItems;
    }
  }

  ngAfterViewInit(): void {
    // Force change detection instead of refresh
    setTimeout(() => {
      this.cdr.detectChanges();
      console.log('Carousel initialized with items:', this.carouselItems.length);
    }, 500);
  }

  get carouselItems(): CarouselItem[] {
    return this.items.length > 0 ? this.items : this.defaultItems;
  }

  onImageLoad(event: any): void {
    console.log('Image loaded successfully:', event.target.src);
  }

  onImageError(event: any): void {
    console.error('Image failed to load:', event.target.src);
    // Use base64 encoded placeholder to avoid network errors
    event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjY2NjIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzY2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';
  }
}
