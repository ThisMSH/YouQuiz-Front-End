import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { MediaResponse } from 'src/app/models/media/media-response';
import { Response } from 'src/app/models/response/response';
import { environment } from 'src/environments/environment.development';

@Injectable({
    providedIn: 'root',
})
export class MediaService {
    private http = inject(HttpClient);
    url = environment.apiUrl;

    getMedia(id: number): Observable<Response<MediaResponse>> {
        return this.http.get<Response<MediaResponse>>(
            `${this.url}/media/${id}`,
        );
    }

    createMedia(media: FormData): Observable<Response<MediaResponse>> {
        return this.http.post<Response<MediaResponse>>(
            `${this.url}/media/add`,
            media,
        );
    }

    deleteMedia(id: number): Observable<Response<MediaResponse>> {
        return this.http.delete<Response<MediaResponse>>(
            `${this.url}/media/${id}`,
        );
    }
}
