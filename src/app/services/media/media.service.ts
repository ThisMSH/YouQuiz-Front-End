import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { MediaDTO } from 'src/app/interfaces/media/media-dto';
import { MediaRequest } from 'src/app/interfaces/media/media-request';
import { Response } from 'src/app/interfaces/response/response';
import { environment } from 'src/environments/environment.development';

@Injectable({
    providedIn: 'root',
})
export class MediaService {
    private http = inject(HttpClient);
    media = signal<MediaDTO | undefined>(undefined);
    url = environment.apiUrl;

    getMedia(id: number): Observable<Response<MediaDTO>> {
        return this.http
            .get<Response<MediaDTO>>(`${this.url}/medias/${id}`)
            .pipe(
                tap((res) => {
                    if (res.status !== 200) {
                        throw new Error(`An error occured: ${res.message}`);
                    }

                    this.media.set(res.data);
                }),
                catchError((err) => throwError(() => err)),
            );
    }

    createMedia(media: FormData): Observable<Response<MediaDTO>> {
        return this.http
            .post<Response<MediaDTO>>(`${this.url}/medias/add`, media)
            .pipe(
                tap((res) => {
                    if (res.status !== 201) {
                        throw new Error(`An error occured: ${res.message}`);
                    }

                    this.media.set(res.data);
                }),
                catchError((err) => throwError(() => err)),
            );
    }

    deleteMedia(id: number): Observable<Response<number>> {
        return this.http
            .delete<Response<number>>(`${this.url}/medias/${id}`)
            .pipe(
                tap((res) => {
                    if (res.status !== 200) {
                        throw new Error(`An error occured: ${res.message}`);
                    }
                }),
                catchError((err) => throwError(() => err)),
            );
    }
}
