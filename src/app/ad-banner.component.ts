import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  Inject,
} from '@angular/core';

import { AdDirective } from './ad.directive';
import { AdItem } from './ad-item';
import { AdComponent } from './ad.component';
import { AdNotFoundComponent } from './ad-not-found.component';
import { ADS } from './app.module';

@Component({
  selector: 'app-ad-banner',
  template: `
    <div class="ad-banner-example">
      <h3>Advertisements</h3>
      <ng-template adHost></ng-template>
    </div>
  `,
})
export class AdBannerComponent implements OnInit, OnDestroy {
  constructor(@Inject(ADS) private adComponents: AdComponent[]) {}

  @Input() ads: AdItem[] = [];

  currentAdIndex = -1;

  @ViewChild(AdDirective, { static: true }) adHost!: AdDirective;
  interval: number | undefined;

  ngOnInit(): void {
    this.loadComponent();
    //this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  // loadComponent() {
  //   this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
  //   const adItem = this.ads[this.currentAdIndex];

  //   const viewContainerRef = this.adHost.viewContainerRef;
  //   viewContainerRef.clear();

  //   const componentRef = viewContainerRef.createComponent<AdComponent>(
  //     adItem.component
  //   );
  //   componentRef.instance.data = adItem.data;
  // }

  loadComponent() {
    var data = {
      headline: 'Hello world!',
      body: 'I made this better using dependency injection!',
      name: 'Henry Hill',
      bio: 'Coolest dude ever',
    };

    var adComponent = this.adComponents.find((x) => x.name == 'Job');

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<AdComponent>(
      adComponent?.adType ?? AdNotFoundComponent
    );
    componentRef.instance.data = data;
  }

  getAds() {
    this.interval = window.setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
