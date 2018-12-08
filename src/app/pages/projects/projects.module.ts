import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ProjectCardsComponent } from './project-cards/project-cards.component';
import { ProjectService } from './project-service/project.service';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectCardsComponent
  ],
  imports: [
    ThemeModule,
    CommonModule
  ],
  providers: [
    ProjectService,
  ]
})
export class ProjectsModule { }
