/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { AnalyticsService } from './@core/utils/analytics.service';
import { SeoService } from './@core/utils/seo.service';
import { SocketioService } from './socketio.service';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  // private socketService: SocketioService
  constructor(private analytics: AnalyticsService, private seoService: SeoService, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get(environment.PROCESS_ENDPOINT).subscribe((res) => {
      console.log('xxxx', res);
    })

    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();

    // this.socketService.setupSocketConnection();
  }

  ngOnDestroy() {
    // this.socketService.disconnect();
  }
}
