import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponse } from 'src/app/models/response/list-response';
import { Response } from 'src/app/models/response/response';
import { StudentRequest } from 'src/app/models/student/student-request';
import { StudentResponse } from 'src/app/models/student/student-response';
import { SortOrder } from 'src/app/types/types';
import { environment } from 'src/environments/environment.development';

@Injectable({
    providedIn: 'root',
})
export class StudentService {
    private http = inject(HttpClient);
    url = environment.apiUrl;

    getStudent(id: number): Observable<Response<StudentResponse>> {
        return this.http.get<Response<StudentResponse>>(
            `${this.url}/students/${id}`,
        );
    }

    getAllStudents(
        size: number,
        sortBy: string,
        sortOrder: SortOrder,
        page: number = 0,
        fullName: string = '',
    ): Observable<ListResponse<StudentResponse>> {
        return this.http.get<ListResponse<StudentResponse>>(
            `${this.url}/students?fullName=${fullName}&page=${page}&size=${size}&sortBy=${sortBy}&sortOrder=${sortOrder}`,
        );
    }

    createStudent(
        student: StudentRequest,
    ): Observable<Response<StudentResponse>> {
        return this.http.post<Response<StudentResponse>>(
            `${this.url}/students/add`,
            student,
        );
    }

    updateStudent(
        student: StudentRequest,
    ): Observable<Response<StudentResponse>> {
        return this.http.put<Response<StudentResponse>>(
            `${this.url}/students/update`,
            student,
        );
    }

    deleteStudent(id: number): Observable<Response<StudentResponse>> {
        return this.http.delete<Response<StudentResponse>>(
            `${this.url}/students/${id}`,
        );
    }
}
