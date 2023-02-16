import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameModule } from './features/game/game.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { ProfileModule } from './features/profile/profile.module';
import { CapitalizeFirstCharPipe } from './shared/tools/ui/capitalize-first-char.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GameModule
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent, SideBarComponent] // Treenodes initiaux => detect changes séparés
})
export class AppModule { }
