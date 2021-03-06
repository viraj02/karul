import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  copy: any = '&copy';

  constructor(private route: Router) { }

  ngOnInit() {
  }

  navigate(url) {
    this.route.navigateByUrl(url);
  }

}
