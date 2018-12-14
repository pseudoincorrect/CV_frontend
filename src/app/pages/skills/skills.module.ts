import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';
import { ThemeModule } from '../../@theme/theme.module';

import { ChartModule } from 'angular2-chartjs';

import { ChartjsPieComponent } from './charts/chartjs-pie.component';
import { ChartjsRadarComponent } from './charts/chartjs-radar.component';

@NgModule({
  declarations: [
    SkillsComponent,
    ChartjsPieComponent,
    ChartjsRadarComponent,
  ],
  imports: [
    ThemeModule,
    CommonModule,
    ChartModule,
  ],
})
export class SkillsModule { }
