import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Language } from '../components/app-header/app-header.component';

@Injectable({
  providedIn: 'platform',
})
export class TranslateService {
  protected readonly http = inject(HttpClient);

  protected static readonly INTERPOLATION_REGEX = /{{\s?(\w+)\s?}}/g;

  protected translationsSubject: BehaviorSubject<Record<string, string>> =
    new BehaviorSubject({});

  protected translations$: Observable<Record<string, string>> =
    this.translationsSubject.asObservable();

  public init(lang: Language = 'fr'): Observable<void> {
    return this.http
      .get<Record<string, string>>(`/assets/i18n/${lang}.json`)
      .pipe(
        map((translations) => {
          this.translationsSubject.next(translations);
        })
      );
  }

  public instant(
    key: `KEY_${string}`,
    params?: Record<string, unknown>
  ): string;
  // eslint-disable-next-line @typescript-eslint/unified-signatures
  public instant(key: string, params?: Record<string, unknown>): string;
  public instant(key: string, params?: Record<string, unknown>): string {
    const localTranslation = this.translationsSubject.value[key];
    if (localTranslation !== undefined) {
      if (params) {
        return this.interpolate(localTranslation, params);
      }
      if (localTranslation.includes('{{')) {
        return this.stripInterpolations(localTranslation);
      }
      return localTranslation;
    }
    return key;
  }

  protected interpolate(
    localTranslation: string,
    params: Record<string, unknown>
  ): string {
    return localTranslation.replace(
      TranslateService.INTERPOLATION_REGEX,
      (match, variable: keyof typeof params) => {
        const param = params[variable];
        return param !== undefined ? String(param) : '';
      }
    );
  }

  protected stripInterpolations(localTranslation: string): string {
    return localTranslation.replace(TranslateService.INTERPOLATION_REGEX, '');
  }
}
