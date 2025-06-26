import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Header } from './common/header/header';
import { Home} from './pages/home/home';
import { Classes } from './pages/classes/classes';
import { ContactUs } from './pages/contact-us/contact-us';
import { AboutUs } from './pages/about-us/about-us';
import { Footer } from './common/footer/footer';
import {  TimeTablesComponent } from './pages/time-tables/time-tables';
import { TeachersComponent } from './pages/teachers/teachers';
import { MathsLessons } from './pages/maths-lessons/maths-lessons';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Home,AboutUs,Classes,ContactUs,Footer,RouterOutlet,TimeTablesComponent,TeachersComponent,MathsLessons],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'class-app';
}
