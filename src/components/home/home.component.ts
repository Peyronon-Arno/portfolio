import { NgForOf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { Router } from '@angular/router';
import { TranslatePipe } from '../../pipe/translate.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatButtonModule,
    NgForOf,
    MatCardModule,
    MatDividerModule,
    TranslatePipe,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  protected readonly router = inject(Router);

  protected readonly buttons: { label: string; path: string }[] = [
    {
      label: 'KEY_SEE_MY_SKILLS',
      path: '/skills',
    },
    {
      label: 'KEY_SEE_EXPERIENCES',
      path: '/experiences',
    },
    {
      label: 'KEY_SEE_PROJECTS',
      path: '/projects',
    },
  ];

  protected navigateTo(path: string): void {
    this.router.navigateByUrl(path);
  }
}
