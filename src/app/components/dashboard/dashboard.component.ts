import { Component, OnDestroy} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  selectedItem="notes"
  selectItem(item: string) {
    this.selectedItem = item;
  }
    
  constructor( media: MediaMatcher,) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    
  }

  ngOnDestroy(): void {
    //  this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
