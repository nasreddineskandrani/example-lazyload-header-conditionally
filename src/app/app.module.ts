import { NgModule, Injectable, NgModuleFactoryLoader } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { CanActivate } from "@angular/router";

import { AppComponent } from "./app.component";
import { Component } from "@angular/core";
import { WrapHeaderComponent } from "./wrap-header.component";
import { HeaderModule } from "./header.module";

@Injectable()
export class ByPassGuard implements CanActivate {
  constructor(private loader: NgModuleFactoryLoader) {}

  canActivate(): boolean {
    return true;
  }
}

@Component({
  selector: "my-app-proxy-route",
  template: "proxy <router-outlet></router-outlet>"
})
export class ProxyRouteComponent {}

const appRoutes: Routes = [
  {
    path: "",
    component: ProxyRouteComponent,
    outlet: "header",
    children: [
      {
        path: "",
        component: WrapHeaderComponent
      }
    ]
  },
  {
    path: "",
    component: ProxyRouteComponent,
    // outlet: 'content',
    children: [
      {
        path: "",
        loadChildren: "./content.module#ContentModule"
      }
    ]
  },
  {
    // to create the chunk
    path: "dummy-lazyloader/header",
    loadChildren: "./header-lazy.module#HeaderLazyModule"
  }
];

@NgModule({
  imports: [
    HeaderModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [ByPassGuard],
  declarations: [AppComponent, ProxyRouteComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
