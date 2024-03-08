import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Skills } from '../technical-skills/technical-skills.component';
import { TranslatePipe } from '../../../pipe/translate.pipe';
import { MatDividerModule } from '@angular/material/divider';
import { NgForOf, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-skills-dialog',
  standalone: true,
  templateUrl: './skills-dialog.component.html',
  styleUrl: './skills-dialog.component.scss',
  imports: [
    NgForOf,
    MatButtonModule,
    MatDividerModule,
    TranslatePipe,
    MatProgressBarModule,
    NgIf,
  ],
})
export class SkillsDialogComponent {
  protected readonly matDialog = inject(MatDialog);

  protected currentLevel = 0;

  public constructor(@Inject(MAT_DIALOG_DATA) public data: Skills) {
    this.animateProgressBar();
  }

  protected animateProgressBar(): void {
    const interval = setInterval(() => {
      if (this.currentLevel < this.data.level) {
        this.currentLevel++;
      } else {
        clearInterval(interval);
      }
    }, 10);
  }

  protected close(): void {
    this.matDialog.closeAll();
  }
}
