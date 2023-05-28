import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  awesomeArray= [
    {
      symbol: '<i class="far fa-lightbulb"></i>',
      heading: "Thoughtful Design",
      info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra.`
    },
    {
      symbol: '<i class="far fa-keyboard"></i>',
      heading: "Well Crafted",
      info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra.`
    },
    {
      symbol: '<i class="fas fa-bolt"></i>',
      heading: "Easy to Customize",
      info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra.`
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
