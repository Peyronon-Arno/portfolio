import { Component } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { NgClass, NgForOf } from "@angular/common";
import { TranslatePipe } from "../../pipe/translate.pipe";
import { MatTooltipModule } from "@angular/material/tooltip";
import { environment } from "../../environments/environment";

export type FooterMedias = {
  icon: string;
  link: string;
  tooltip: string;
};

@Component({
  selector: "app-footer",
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
  templateUrl: "./app-footer.component.html",
  styleUrl: "./app-footer.component.scss",
})
export class AppFooterComponent {
  protected readonly email = environment.email;
  protected readonly phone = environment.phone;
  protected readonly medias: FooterMedias[] = environment.footerMedias;
}
