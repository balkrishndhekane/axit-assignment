import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-icons',
  templateUrl: './social-icons.component.html',
  styleUrls: ['./social-icons.component.scss']
})
export class SocialIconsComponent implements OnInit {
  socialArray = ['<i class="fab fa-facebook-f"></i>', '<i class="fab fa-twitter"></i>', '<i class="fab fa-google-plus-square"></i>', '<i class="fab fa-pinterest"></i>', '<i class="fab fa-instagram"></i>', '<i class="fas fa-anchor"></i>','<i class="fas fa-rss"></i>']
  constructor() { }

  ngOnInit(): void {
  }

}
