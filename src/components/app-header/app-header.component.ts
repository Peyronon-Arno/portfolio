import { Component } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { NgForOf } from "@angular/common";
import { RouterModule } from "@angular/router";
import { TranslatePipe } from "../../pipe/translate.pipe";
import { environment } from "../../environments/environment";

export type Language = "en" | "fr";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    NgForOf,
    RouterModule,
    TranslatePipe,
  ],
  templateUrl: "./app-header.component.html",
  styleUrl: "./app-header.component.scss",
})
export class AppHeaderComponent {
  protected readonly title = environment.headerTitle;
  protected readonly navItems: { path: string; label: string }[] = [];

  public constructor() {
    this.navItems.push({
      label: "KEY_ABOUT",
      path: "/home",
    });
    if (!environment.hideSkills) {
      this.navItems.push({
        label: "KEY_SKILLS",
        path: "/skills",
      });
    }
    if (!environment.hideExperience) {
      this.navItems.push({
        label: "KEY_EXPERIENCE",
        path: "/experiences",
      });
    }
    if (!environment.hideProjects) {
      this.navItems.push({
        label: "KEY_PROJECTS",
        path: "/projects",
      });
    }
  }
}
