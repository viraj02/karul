import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
      // share()
    );

  constructor(private breakpointObserver: BreakpointObserver, private route: Router, ) {}

  ngOnInit() {
    console.log(this.route.url);
    if (this.route.url == 'login') {
      console.log('true');
    }
  }

  navigate(url) {
    this.route.navigateByUrl(url);
  }

}
