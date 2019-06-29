import { Component, OnInit } from '@angular/core';
import { UiService } from '../../shared-service/ui.service';
import { UiHeaderText } from '../ui-model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  activeSection: boolean;
  sectionHeaderData: UiHeaderText[] = [];

  constructor(private uiService: UiService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.activeSection = this.uiService.activeSection;
    this.uiService.getHeaderName().subscribe(data => {
      this.sectionHeaderData = data;
    });
  }

}
