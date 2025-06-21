import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './common/header/header';
import { Home} from './pages/home/home';
import { Classes } from './pages/classes/classes';
import { ContactUs } from './pages/contact-us/contact-us';
import { AboutUs } from './pages/about-us/about-us';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Home,AboutUs,Classes,ContactUs],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'class-app';
}
