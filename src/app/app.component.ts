import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {InfobarComponent} from './shared/components/infobar/infobar.component';
import {HeaderComponent} from './shared/components/header/header.component';
import {FooterComponent} from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InfobarComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lobos';
}
