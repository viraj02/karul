import { NgModule } from '@angular/core';
import { FooterComponent } from './ui/footer/footer.component';
import { HeaderComponent } from './ui/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { UiService } from './shared-service/ui.service';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({

    imports: [
        BrowserModule,
        HttpClientModule,
    ],
    declarations: [
        FooterComponent,
        HeaderComponent,
        AboutComponent,
        ContactusComponent,
    ],
    exports: [
        FooterComponent,
        HeaderComponent,
    ],
    providers: [UiService]

})
export class SharedModule { }