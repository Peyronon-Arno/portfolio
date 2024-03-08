import type { PipeTransform } from '@angular/core';
import { inject, Pipe } from '@angular/core';
import { TranslateService } from '../services/translate.service';

@Pipe({
  name: 'translate',
  pure: true,
  standalone: true,
})
export class TranslatePipe implements PipeTransform {
  protected readonly translateService = inject(TranslateService);

  public transform(
    key: `KEY_${string}`,
    params?: Record<string, unknown>
  ): string;
  public transform(key: string, params?: Record<string, unknown>): string;
  public transform(key: string, params?: Record<string, unknown>): string {
    return key ? this.translateService.instant(key, params) : '';
  }
}
