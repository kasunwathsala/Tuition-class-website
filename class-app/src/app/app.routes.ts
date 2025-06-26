import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { AboutUs } from './pages/about-us/about-us';
import { Classes } from './pages/classes/classes';
import { ContactUs } from './pages/contact-us/contact-us';
import { TimeTablesComponent } from './pages/time-tables/time-tables';

import { TeachersComponent } from './pages/teachers/teachers';

export const routes: Routes = [
    {path: '' , component: Home},
    {path: 'home' , component: Home},
    {path: 'about-us', component: AboutUs},
    {path: 'classes', component: Classes},
    {path: 'contact-us', component: ContactUs},
    {path: 'time-tables', component: TimeTablesComponent},
    {path: 'teachers', component: TeachersComponent}

];
