import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  AppHeaderComponent,
  Language,
} from '../components/app-header/app-header.component';
import { AppFooterComponent } from '../components/app-footer/app-footer.component';
import { TranslateService } from '../services/translate.service';
import { HttpClient } from '@angular/common/http';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppHeaderComponent, AppFooterComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  protected readonly translate = inject(TranslateService);
  protected readonly destroyRef = inject(DestroyRef);

  public constructor() {
    this.translate
      .init(environment.defaultLang as Language)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {});
  }
}
