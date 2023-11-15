import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameModule } from './features/game/game.module';
import { HeaderComponent, HeaderModule } from './shared/components/header/header.component';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderModule,
    GameModule
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent, SideBarComponent]
})
export class AppModule { }
