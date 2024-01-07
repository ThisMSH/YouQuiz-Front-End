import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponse } from 'src/app/models/response/list-response';
import { Response } from 'src/app/models/response/response';
import { SubjectRequest } from 'src/app/models/subject/subject-request';
import { SubjectResponse } from 'src/app/models/subject/subject-response';
import { SortOrder } from 'src/app/types/types';
import { environment } from 'src/environments/environment.development';

@Injectable({
    providedIn: 'root',
})
export class SubjectService {
    http = inject(HttpClient);
    url = environment.apiUrl;

    getSubject(id: number): Observable<SubjectResponse> {
        return this.http.get<SubjectResponse>(`${this.url}/subjects/${id}`);
    }

    getAllSubjects(
        size: number,
        sortBy: string,
        sortOrder: SortOrder,
        page: number = 0,
        title: string = '',
    ): Observable<ListResponse<SubjectResponse>> {
        return this.http.get<ListResponse<SubjectResponse>>(
            `${this.url}/subjects?title=${title}&page=${page}&size=${size}&sortBy=${sortBy}&sortOrder=${sortOrder}`,
        );
    }

    createSubject(
        subject: SubjectRequest,
    ): Observable<Response<SubjectResponse>> {
        return this.http.post<Response<SubjectResponse>>(
            `${this.url}/subjects/add`,
            subject,
        );
    }

    updateSubject(
        subject: SubjectRequest,
    ): Observable<Response<SubjectResponse>> {
        return this.http.put<Response<SubjectResponse>>(
            `${this.url}/subjects/update`,
            subject,
        );
    }

    deleteSubject(id: number): Observable<Response<SubjectResponse>> {
        return this.http.delete<Response<SubjectResponse>>(
            `${this.url}/subjects/${id}`,
        );
    }
}
