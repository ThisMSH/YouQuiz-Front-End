import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponse } from 'src/app/interfaces/response/list-response';
import { Response } from 'src/app/interfaces/response/response';
import { TrainerRequest } from 'src/app/models/trainer/trainer-request';
import { TrainerResponse } from 'src/app/models/trainer/trainer-response';
import { SortOrder } from 'src/app/types/types';
import { environment } from 'src/environments/environment.development';

@Injectable({
    providedIn: 'root',
})
export class TrainerService {
    private http = inject(HttpClient);
    url = environment.apiUrl;

    getTrainer(id: number): Observable<Response<TrainerResponse>> {
        return this.http.get<Response<TrainerResponse>>(
            `${this.url}/trainers/${id}`,
        );
    }

    getAllTrainers(
        size: number,
        sortBy: string,
        sortOrder: SortOrder,
        page: number = 0,
        fullName: string = '',
    ): Observable<ListResponse<TrainerResponse>> {
        return this.http.get<ListResponse<TrainerResponse>>(
            `${this.url}/trainers?fullName=${fullName}&page=${page}&size=${size}&sortBy=${sortBy}&sortOrder=${sortOrder}`,
        );
    }

    createTrainer(
        trainer: TrainerRequest,
    ): Observable<Response<TrainerResponse>> {
        return this.http.post<Response<TrainerResponse>>(
            `${this.url}/trainers/add`,
            trainer,
        );
    }

    updateTrainer(
        trainer: TrainerRequest,
    ): Observable<Response<TrainerResponse>> {
        return this.http.put<Response<TrainerResponse>>(
            `${this.url}/trainers/update`,
            trainer,
        );
    }

    deleteTrainer(id: number): Observable<Response<TrainerResponse>> {
        return this.http.delete<Response<TrainerResponse>>(
            `${this.url}/trainers/${id}`,
        );
    }
}
