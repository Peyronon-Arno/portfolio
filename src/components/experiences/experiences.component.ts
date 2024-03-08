import { Component } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { NgFor } from "@angular/common";
import { environment } from "../../environments/environment";

export type Experience = {
  title: string;
  company: string;
  location: string;
  date: string;
  description: string;
};
@Component({
  selector: "app-experiences",
  standalone: true,
  imports: [MatCardModule, NgFor],
  templateUrl: "./experiences.component.html",
  styleUrl: "./experiences.component.scss",
})
export class ExperiencesComponent {
  protected readonly experiences = environment.experiences;
}
