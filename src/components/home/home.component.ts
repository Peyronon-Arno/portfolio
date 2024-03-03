import { NgForOf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, NgForOf, MatCardModule, MatDividerModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  protected readonly router = inject(Router);

  protected readonly buttons: { label: string; path: string }[] = [
    {
      label: 'About me',
      path: '/about',
    },
    {
      label: 'See my experiences',
      path: '/experiences',
    },
    {
      label: 'See my projects',
      path: '/projects',
    },
  ];

  protected navigateTo(path: string): void {
    this.router.navigateByUrl(path);
  }
}
