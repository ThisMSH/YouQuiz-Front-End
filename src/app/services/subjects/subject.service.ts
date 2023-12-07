import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Observable, tap, catchError, throwError } from 'rxjs';
import { ListResponse } from 'src/app/interfaces/response/list-response';
import { SubjectDTO } from 'src/app/interfaces/subject/subject-dto';
import { SortOrder } from 'src/app/types/types';
import { environment } from 'src/environments/environment.development';

@Injectable({
    providedIn: 'root',
})
export class SubjectService {
    http = inject(HttpClient);
    subject = signal<SubjectDTO | undefined>(undefined);
    subjects = signal<ListResponse<SubjectDTO> | undefined>(undefined);
    url = environment.apiUrl;

    getSubjects({
        title = '',
        page = 1,
        size = 24,
        sortBy = 'id',
        sortOrder = 'ASC',
    } = {}): Observable<ListResponse<SubjectDTO>> {
        return this.http
            .get<ListResponse<SubjectDTO>>(
                `${this.url}/subjects?title=${title}&page=${page}&size=${size}&sortBy=${sortBy}&sortOrder=${sortOrder}`,
            )
            .pipe(
                tap((res) => {
                    if (res.status !== 200) {
                        throw new Error(`An error occured: ${res.message}`);
                    }

                    this.subjects.set(res);
                }),
                catchError((err) => throwError(() => err)),
            );
    }
}
