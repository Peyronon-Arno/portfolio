import { NgForOf } from "@angular/common";
import { Component, inject } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatDialog } from "@angular/material/dialog";
import { SkillsDialogComponent } from "../skills-dialog/skills-dialog.component";
import { environment } from "../../../environments/environment";

export type Skills = {
  name: string;
  level: number;
  icon?: string;
  description: string;
};

@Component({
  selector: "app-technical-skills",
  standalone: true,
  imports: [NgForOf, MatCardModule],
  templateUrl: "./technical-skills.component.html",
  styleUrl: "./technical-skills.component.scss",
})
export class TechnicalSkillsComponent {
  protected readonly technicalSkills = environment.technicalSkills;
  protected readonly matDialog = inject(MatDialog);

  protected openModal(skill: Skills): void {
    this.matDialog.open(SkillsDialogComponent, {
      data: skill,
      disableClose: true,
      width: "600px",
    });
  }
}
