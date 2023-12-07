import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { LevelDTO } from 'src/app/interfaces/level/level-dto';
import { ListResponse } from 'src/app/interfaces/response/list-response';
import { environment } from 'src/environments/environment.development';

@Injectable({
    providedIn: 'root',
})
export class LevelService {
    http = inject(HttpClient);
    level = signal<LevelDTO | undefined>(undefined);
    levels = signal<ListResponse<LevelDTO> | undefined>(undefined);
    url = environment.apiUrl;

    getLevels({
        title = '',
        page = 1,
        size = 24,
        sortBy = 'id',
        sortOrder = 'ASC',
    } = {}): Observable<ListResponse<LevelDTO>> {
        return this.http
            .get<ListResponse<LevelDTO>>(
                `${this.url}/levels?title=${title}&page=${page}&size=${size}&sortBy=${sortBy}&sortOrder=${sortOrder}`,
            )
            .pipe(
                tap((res) => {
                    if (res.status !== 200) {
                        throw new Error(`An error occured: ${res.message}`);
                    }

                    this.levels.set(res);
                }),
                catchError((err) => throwError(() => err)),
            );
    }
}
