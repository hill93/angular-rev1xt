import { Component, Input, Type, Injectable } from '@angular/core';

import { AdComponent } from './ad.component';

@Component({
  template: `
    <div class="hero-profile">
      <h3>Featured Hero Profile</h3>
      <h4>{{data.name}}</h4>

      <p>{{data.bio}}</p>

      <strong>Hire this hero today!</strong>
    </div>
  `,
})
@Injectable()
export class HeroProfileComponent implements AdComponent {
  @Input() data: any;
  adType: Type<AdComponent> = HeroProfileComponent;
  name: string = 'Profile';
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
