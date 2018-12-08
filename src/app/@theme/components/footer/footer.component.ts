import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Thanks <b><a href="https://akveo.com" target="_blank">Akveo</a></b>&nbsp; :) </span>
  `,
})
export class FooterComponent {
}
