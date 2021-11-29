import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { Sub_headerComponent } from './sub_header/sub_header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SearchComponent } from './search/search.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './content/content.component';
import { Menu_verticalComponent } from './menu_vertical/menu_vertical.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  declarations: [												
    AppComponent,
      LoginComponent,
      HeaderComponent,
      NavbarComponent,
      FooterComponent,
      Sub_headerComponent,
      BreadcrumbsComponent,
      SearchComponent,
      SidebarComponent,
      HomeComponent,
      ContentComponent,
      Menu_verticalComponent,
      LogoComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
