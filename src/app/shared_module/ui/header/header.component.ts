import { Component, OnInit } from '@angular/core';
import { UiService } from '../../shared-service/ui.service';
import { UiHeaderText } from '../ui-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  activeSection: boolean;
  sectionHeaderData: UiHeaderText[] = [];
  currentPageUrl: any;

  constructor(private uiService: UiService, private router: Router) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.activeSection = this.uiService.activeSection;
    this.uiService.getHeaderName().subscribe(data => {
      this.sectionHeaderData = data;
    });
  }

  routerFun(url) {
    this.router.navigateByUrl(`/${url}`);
  }

}
