import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('userForm') userForm!: NgForm
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.userForm.value);
    
  }

}
