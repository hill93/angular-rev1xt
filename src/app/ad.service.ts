import { Injectable } from '@angular/core';
import { AdItem } from './ad-item';

@Injectable()
export class AdService {
  getAds() {
    return [
      new AdItem('Profile', { name: 'Bombasto', bio: 'Brave as they come' }),
      new AdItem('Profile', { name: 'Dr. IQ', bio: 'Smart as they come' }),
      new AdItem('Job', {
        headline: 'Hiring for several positions',
        body: 'Submit your resume today!',
      }),
      new AdItem('Job', {
        headline: 'Openings in all departments',
        body: 'Apply today',
      }),
    ];
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
