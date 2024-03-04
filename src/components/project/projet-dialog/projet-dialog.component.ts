import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { TranslatePipe } from '../../../pipe/translate.pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { NgForOf } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Project } from '../project.component';

@Component({
  selector: 'app-projet-dialog',
  standalone: true,
  templateUrl: './projet-dialog.component.html',
  styleUrl: './projet-dialog.component.scss',
  imports: [
    MatButtonModule,
    MatDividerModule,
    TranslatePipe,
    NgForOf,
    MatTooltipModule,
  ],
})
export class ProjetDialogComponent {
  protected readonly matDialog = inject(MatDialog);
  public constructor(@Inject(MAT_DIALOG_DATA) public data: Project) {}

  protected close(): void {
    this.matDialog.closeAll();
  }
}
