import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BannerComponent } from './banner/banner.component';
import { BannerExternalComponent } from './banner/banner-external.component';
import { BannerInitialComponent } from './banner/banner-initial.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardHeroComponent } from './dashboard/dashboard-hero.component';
import { DemoComponent } from './demo/demo.component';
import { HeroComponent } from './hero/hero.component';
import { HeroDetailComponent } from './hero/hero-detail.component';
import { HeroListComponent } from './hero/hero-list.component';
import { CanvasComponent } from './shared/canvas.component';
import { HighlightDirective } from './shared/highlight.directive';
import { TitleCasePipe } from './shared/title-case.pipe';
import { TwainComponent } from './twain/twain.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppInitialComponent } from './app-initial.component';
import { DummyModule } from './dummy.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BannerComponent,
    BannerExternalComponent,
    BannerInitialComponent,
    DashboardComponent,
    DashboardHeroComponent,
    DemoComponent,
    HeroComponent,
    HeroDetailComponent,
    HeroListComponent,
    CanvasComponent,
    HighlightDirective,
    TitleCasePipe,
    TwainComponent,
    WelcomeComponent,
    AppInitialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DummyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
