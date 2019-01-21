import {
  Component,
  Injector,
  NgModuleFactoryLoader,
  SystemJsNgModuleLoader,
  ViewChild,
  ViewContainerRef
} from "@angular/core";
import { HeaderComponent } from "./header.component";

@Component({
  moduleId: "header",
  selector: "wrap-header-component",
  providers: [
    {
      provide: NgModuleFactoryLoader,
      useClass: SystemJsNgModuleLoader
    }
  ],
  template:
    "I am a wrapper for the HEADER(s) components that inserts conditionnaly a dynamic HEADER component below: <div #vc></div>"
})
export class WrapHeaderComponent {
  @ViewChild("vc", { read: ViewContainerRef }) _container: ViewContainerRef;

  constructor(
    private _injector: Injector,
    private loader: NgModuleFactoryLoader
  ) {}

  ngAfterViewInit() {
    this.loader.load("./header-lazy.module#HeaderLazyModule").then(factory => {
      const module = factory.create(this._injector);
      const resolver = module.componentFactoryResolver;
      const cmpFactory = resolver.resolveComponentFactory(HeaderComponent);
      this._container.createComponent(cmpFactory);
    });
  }
}
