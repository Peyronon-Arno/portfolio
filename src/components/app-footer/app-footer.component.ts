import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgClass, NgForOf } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatToolbarModule, NgForOf, NgClass],
  templateUrl: './app-footer.component.html',
  styleUrl: './app-footer.component.scss',
})
export class AppFooterComponent {
  protected readonly email = 'arno.peyronon@gmail.com';
  protected readonly phone = '+33 7 87 23 06 11';
  // TODO add links
  protected readonly medias: { icon: string; link: string }[] = [
    {
      icon: 'fa-github',
      link: '',
    },
    {
      icon: 'fa-linkedin',
      link: '',
    },
    {
      icon: 'fa-twitter',
      link: '',
    },
  ];
}
