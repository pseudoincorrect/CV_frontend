import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvComponent } from './cv.component';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  declarations: [
    CvComponent,
  ],
  imports: [
    ThemeModule,
    CommonModule,
  ],
})
export class CvModule { }
