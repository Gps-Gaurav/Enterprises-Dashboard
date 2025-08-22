import { Component } from '@angular/core';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent {
  services = [
    {
      icon: 'fa-th-large',
      title: 'Category Management',
      description: 'Streamline your business with efficient category organization. Perfect for inventory and product classification.',
      features: [
        'Hierarchical categorization',
        'Category performance tracking',
        'Easy category updates'
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
      ]
    }
  ];
}
