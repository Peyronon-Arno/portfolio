import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { ExperiencesComponent } from '../components/experiences/experiences.component';
import { SkillsComponent } from '../components/skills/skills.component';
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
    path: 'skills',
    component: SkillsComponent,
  },
  {
    path: 'experiences',
    component: ExperiencesComponent,
  },
  {
    path: 'projects',
    component: ProjectComponent,
  },
];
