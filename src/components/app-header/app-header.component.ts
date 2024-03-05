import { Component, EventEmitter, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgForOf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '../../pipe/translate.pipe';

export type Language = 'en' | 'fr';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    NgForOf,
    RouterModule,
    TranslatePipe,
  ],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss',
})
export class AppHeaderComponent {
  protected readonly navItems: { path: string; label: string }[] = [
    {
      label: 'KEY_HOME',
      path: '/home',
    },
    {
      label: 'KEY_SKILLS',
      path: '/skills',
    },
    {
      label: 'KEY_EXPERIENCE',
      path: '/experiences',
    },
    {
      label: 'KEY_PROJECTS',
      path: '/projects',
    },
    {
      label: 'KEY_CONTACT',
      path: '/contact',
    },
  ];
}
