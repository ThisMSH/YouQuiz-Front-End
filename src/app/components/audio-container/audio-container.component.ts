import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-audio-container',
  templateUrl: './audio-container.component.html',
  styleUrls: ['./audio-container.component.css']
})
export class AudioContainerComponent {
    @Input() url!: string;
    apiUrl: string = environment.apiUrl;
}
