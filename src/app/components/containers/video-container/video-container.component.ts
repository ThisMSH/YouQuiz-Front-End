import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Component({
    selector: 'app-video-container',
    templateUrl: './video-container.component.html',
    styleUrls: ['./video-container.component.css'],
})
export class VideoContainerComponent {
    @Input() url!: string;
    @Input() title!: string;
    apiUrl: string = environment.apiUrl;
}
