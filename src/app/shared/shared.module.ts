import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { Example01Component } from './charts/example-01/example-01.component';
import { Example02Component } from './charts/example-02/example-02.component';

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule
  ],
  declarations: [Example01Component, Example02Component],
  exports: [Example01Component, Example02Component]
})
export class SharedModule { }
