import { NgModule } from "@angular/core";
import { WrapHeaderComponent } from "./wrap-header.component";

@NgModule({
  declarations: [WrapHeaderComponent],
  entryComponents: [WrapHeaderComponent],
  exports: [WrapHeaderComponent]
})
export class HeaderModule {}
