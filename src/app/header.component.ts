import { Component } from "@angular/core";

@Component({
  moduleId: "header",
  selector: "header-component",
  template:
    "<span style='border: 1px solid red'>I am the HEADER component from a lazy loaded module</span>"
})
export class HeaderComponent {
  constructor() {}
}
