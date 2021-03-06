import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MdToolbarModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { MaterialModules } from './material';
import { appRoutes } from './routes';
import { AppComponent } from './app.component';

/** services */
import { ToolbarMenuService } from './services/toolbar-menu.service';

/** auto generated by `ng generate component pages/$name` */
import { ToolbarComponent } from './pages/toolbar/toolbar.component';
import { SidenavComponent } from './pages/sidenav/sidenav.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidenavComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    ...MaterialModules
  ],
  providers: [ToolbarMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
