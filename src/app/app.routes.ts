import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { ExperiencesComponent } from '../components/experiences/experiences.component';
import { ContactComponent } from '../components/contact/contact.component';
import { ProjectComponent } from '../components/project/project.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'experiences',
    component: ExperiencesComponent,
  },
  {
    path: 'projects',
    component: ProjectComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
];
