import {Platform} from '@angular/cdk/platform';
import {Inject, Injectable, Optional} from '@angular/core';
import { BAR_TOKEN } from '@my/library/bar';

@Injectable()
export class FooClass {
  constructor(@Optional() @Inject(BAR_TOKEN) matDateLocale: string) { }
}
