import { Component } from '@angular/core';
// import { NgIf } from '@angular/common';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [NgIf],
  templateUrl: './about-us.html',
  styleUrls: ['./about-us.css']
})
export class AboutUs {
      
     isContentVisible: boolean =  false;

     Button(){
      this.isContentVisible = !this.isContentVisible
     }
}

