import { BrowserModule } from '@angular/platform-browser';
import { InjectionToken, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeroJobAdComponent } from './hero-job-ad.component';
import { AdBannerComponent } from './ad-banner.component';
import { AdComponent } from './ad.component';
import { HeroProfileComponent } from './hero-profile.component';
import { AdDirective } from './ad.directive';
import { AdService } from './ad.service';

export const ADS = new InjectionToken<AdComponent>('Ads');

@NgModule({
  imports: [BrowserModule],
  providers: [
    AdService,
    { provide: ADS, useClass: HeroJobAdComponent, multi: true },
    { provide: ADS, useClass: HeroProfileComponent, multi: true },
  ],
  declarations: [
    AppComponent,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    AdDirective,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
