import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ProjectCardsComponent } from './project-cards/project-cards.component';
import { ProjectService } from './project-service/project.service';
import { ThemeModule } from '../../@theme/theme.module';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectCardsComponent,
  ],
  imports: [
    ThemeModule,
    CommonModule,
    NgbModule,
  ],
  providers: [
    ProjectService,
  ],
})
export class ProjectsModule { }
