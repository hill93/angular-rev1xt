import { Component, Input, Type, Injectable } from '@angular/core';

import { AdComponent } from './ad.component';

@Component({
  template: `
    <div class="job-ad">
      <h4>404</h4>
      No ad found!
    </div>
  `,
})
@Injectable()
export class AdNotFoundComponent implements AdComponent {
  @Input() data: any;
  adType: Type<AdComponent> = AdNotFoundComponent;
  name: string = 'NotFound';
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
