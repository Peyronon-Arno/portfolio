import { Component } from '@angular/core';
import { TechnicalSkillsComponent } from './technical-skills/technical-skills.component';
import { SoftSkillsComponent } from './soft-skills/soft-skills.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  imports: [MatCardModule, TechnicalSkillsComponent, SoftSkillsComponent],
})
export class SkillsComponent {}
