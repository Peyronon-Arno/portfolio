import { NgForOf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslatePipe } from '../../pipe/translate.pipe';
import { PROJECTS } from './project.const';
import { MatDialog } from '@angular/material/dialog';
import { ProjetDialogComponent } from './projet-dialog/projet-dialog.component';

export type ProjectIcon = {
  name: string;
  tooltip: string;
};

export type Project = {
  name: string;
  description: string;
  link: string;
  imgUrl: string;
  icons: ProjectIcon[];
  longDescription: string;
};
@Component({
  selector: 'app-project',
  standalone: true,
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
  imports: [
    NgForOf,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatTooltipModule,
    TranslatePipe,
  ],
})
export class ProjectComponent {
  protected readonly projetcs: Project[] = PROJECTS;
  protected readonly matDialog = inject(MatDialog);

  protected openDialog(projet: Project): void {
    this.matDialog.open(ProjetDialogComponent, {
      data: projet,
      disableClose: true,
      width: '600px',
    });
  }
}
