import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { LevelRequest } from 'src/app/models/level/level-request';
import { LevelResponse } from 'src/app/models/level/level-response';
import { ListResponse } from 'src/app/models/response/list-response';
import { Response } from 'src/app/models/response/response';
import { SortOrder } from 'src/app/types/types';
import { environment } from 'src/environments/environment.development';

@Injectable({
    providedIn: 'root',
})
export class LevelService {
    http = inject(HttpClient);
    url = environment.apiUrl;

    getLevel(id: number): Observable<Response<LevelResponse>> {
        return this.http.get<Response<LevelResponse>>(
            `${this.url}/levels/${id}`,
        );
    }

    getAllLevels(
        size: number,
        sortBy: string,
        sortOrder: SortOrder,
        page = 0,
        title = '',
    ): Observable<ListResponse<LevelResponse>> {
        return this.http.get<ListResponse<LevelResponse>>(
            `${this.url}/levels?title=${title}&page=${page}&size=${size}&sortBy=${sortBy}&sortOrder=${sortOrder}`,
        );
    }

    createLevel(level: LevelRequest): Observable<Response<LevelResponse>> {
        return this.http.post<Response<LevelResponse>>(
            `${this.url}/levels/add`,
            level,
        );
    }

    updateLevel(level: LevelRequest): Observable<Response<LevelResponse>> {
        return this.http.put<Response<LevelResponse>>(
            `${this.url}/levels/update`,
            level,
        );
    }

    deleteLevel(id: number): Observable<Response<LevelResponse>> {
        return this.http.delete<Response<LevelResponse>>(
            `${this.url}/levels/${id}`,
        );
    }
}
