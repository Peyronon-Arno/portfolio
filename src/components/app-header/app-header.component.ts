import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgForOf } from '@angular/common';
import { RouterModule } from '@angular/router';

type Language = 'en' | 'fr';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    NgForOf,
    RouterModule,
  ],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss',
})
export class AppHeaderComponent {
  protected readonly navItems: { path: string; label: string }[] = [
    {
      label: 'Home',
      path: '/home',
    },
    {
      label: 'About',
      path: '/about',
    },
    {
      label: 'Experiences',
      path: '/experiences',
    },
    {
      label: 'Projects',
      path: '/projects',
    },
    {
      label: 'Contact',
      path: '/contact',
    },
  ];

  // TODO gérer i18n + key etc...
  protected changeLanguage(lang: Language): void {
    console.log('changeLanguage', lang);
  }
}
