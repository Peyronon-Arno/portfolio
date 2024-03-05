import { NgForOf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SOFT_SKILLS } from './soft-skills.const';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { Skills } from '../technical-skills/technical-skills.component';
import { SkillsDialogComponent } from '../skills-dialog/skills-dialog.component';

@Component({
  selector: 'app-soft-skills',
  standalone: true,
  imports: [NgForOf, MatCardModule],
  templateUrl: './soft-skills.component.html',
  styleUrl: './soft-skills.component.scss',
})
export class SoftSkillsComponent {
  protected readonly softSkills = SOFT_SKILLS;
  protected readonly matDialog = inject(MatDialog);

  protected openModal(skill: Skills): void {
    this.matDialog.open(SkillsDialogComponent, {
      data: skill,
      disableClose: true,
      width: '600px',
    });
  }
}
