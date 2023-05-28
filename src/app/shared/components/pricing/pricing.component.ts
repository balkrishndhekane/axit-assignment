import { Component, OnInit } from '@angular/core';
import { Model } from '../../model/model';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
  subscriptionArray: Model[] =[
    {
      subscription: "Basic",
      cost: "0",
      time: "Free for Life",
      benefits: {
        space: "1 GB of SPACE",
        bandwidth: "10 GB of BANDWIDTH",
        websites: "3 WEBSITES",
        customization: "BASIC CUSTOMIZATION",
        integration: "WORDPRESS INTEGRATION",
        support: "EMAIL SUPPORT"
      }
    },
    {
      subscription: "Professional",
      cost: "19",
      time: "Monthly Payment",
      popularity: "OUR MOST POPULAR",
      benefits: {
        space: "5 GB of SPACE",
        bandwidth: "50 GB of BANDWIDTH",
        websites: "12 WEBSITES",
        customization: "ADVANCE CUSTOMIZATION",
        integration: "WORDPRESS INTEGRATION",
        support: "EMAIL SUPPORT"
      }
    },
    {
      subscription: "Enterprise",
      cost: "70",
      time: "Monthly Payment",
      benefits: {
        space: "UNLIMITED GB of SPACE",
        bandwidth: "UNLIMITED GB of BANDWIDTH",
        websites: "100 WEBSITES",
        customization: "ADVANCE CUSTOMIZATION",
        integration: "WORDPRESS INTEGRATION",
        support: "EMAIL SUPPORT"
      }
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
