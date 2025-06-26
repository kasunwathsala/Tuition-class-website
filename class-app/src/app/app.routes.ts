import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { AboutUs } from './pages/about-us/about-us';
import { Classes } from './pages/classes/classes';
import { ContactUs } from './pages/contact-us/contact-us';
import { TimeTables } from './pages/time-tables/time-tables';

import { Teachers } from './pages/teachers/teachers';

export const routes: Routes = [
    {path: 'home' , component: Home},
    {path: 'about-us', component: AboutUs},
    {path: 'classes', component: Classes},
    {path: 'contact-us', component: ContactUs},
    {path: 'time-tables', component: TimeTables},
    {path: 'teachers', component: Teachers}

];
