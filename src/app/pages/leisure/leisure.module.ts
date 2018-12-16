import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeisureComponent } from './leisure.component';
import { ThemeModule } from '../../@theme/theme.module';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    LeisureComponent,
  ],
  imports: [
  CommonModule,
  ThemeModule,
  NgbModule,
  ],
})
export class LeisureModule { }
