import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

@Component({
    selector: 'my-app-content',
    template: '## ContentComponent',
})
export class ContentComponent {
}

const routes: Routes = [
  { path: '', component: ContentComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ ContentComponent ],
  entryComponents: [ ContentComponent ],
  exports:[],
  providers: []
})
export class ContentModule { }