import { Component } from '@angular/core';
import { AxiosService } from './axios.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'eshop';

  loadedFeature = 'home';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

}
