import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topFunction() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }
  title = 'mercadona';
}
