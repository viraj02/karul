import { NgModule } from '@angular/core';
import { FooterComponent } from './ui/footer/footer.component';
import { HeaderComponent } from './ui/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { UiService } from './shared-service/ui.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({

    imports: [
        BrowserModule,
        HttpClientModule
    ],
    declarations: [
        FooterComponent,
        HeaderComponent,
    ],
    exports: [
        FooterComponent,
        HeaderComponent,
    ],
    providers: [UiService]

})
export class SharedModule { }