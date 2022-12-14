import { Component, Input, Type, Injectable } from '@angular/core';

import { AdComponent } from './ad.component';

@Component({
  template: `
    <div class="job-ad">
      <h4>{{data.headline}}</h4>
      {{data.body}}
    </div>
  `,
})
@Injectable()
export class HeroJobAdComponent implements AdComponent {
  @Input() data: any;
  adType: Type<AdComponent> = HeroJobAdComponent;
  name: string = 'Job';
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
