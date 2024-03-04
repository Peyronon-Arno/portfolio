import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgClass, NgForOf } from '@angular/common';
import { TranslatePipe } from '../../pipe/translate.pipe';
import { MatTooltipModule } from '@angular/material/tooltip';

type FooterMedias = {
  icon: string;
  link: string;
  tooltip: string;
};

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    NgForOf,
    NgClass,
    TranslatePipe,
    MatTooltipModule,
  ],
  templateUrl: './app-footer.component.html',
  styleUrl: './app-footer.component.scss',
})
export class AppFooterComponent {
  protected readonly email = 'arno.peyronon@gmail.com';
  protected readonly phone = '+33 7 87 23 06 11';
  // TODO add links
  protected readonly medias: FooterMedias[] = [
    {
      icon: 'fa-github',
      tooltip: 'Github',
      link: '',
    },
    {
      icon: 'fa-linkedin',
      tooltip: 'Linkedin',
      link: '',
    },
    {
      icon: 'fa-twitter',
      tooltip: 'Twitter',
      link: '',
    },
    {
      icon: 'fa-facebook',
      tooltip: 'Facebook',
      link: '',
    },
  ];
}
