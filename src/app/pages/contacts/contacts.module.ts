import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  declarations: [
    ContactsComponent,
  ],
  imports: [
    CommonModule,
    ThemeModule,
  ],
})
export class ContactsModule { }
