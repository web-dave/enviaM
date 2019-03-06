import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../foo.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title = 'enviaM';
  sayHi() {
    return 'Moin ' + this.title;
  }
}
