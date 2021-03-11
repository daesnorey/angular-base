import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';

import { TestModel } from '@domain/test.model';
import { TestRepository } from '@repository/test.repository';
import { TestWebEntity } from './test-web-entity';
import { TestWebRepositoryMapper } from './test-web-repository-mapper';

@Injectable({
    providedIn: 'root',
})
export class TestWebRepository extends TestRepository {
    mapper = new TestWebRepositoryMapper();

    constructor(private http: HttpClient) {
        super();
    }

    getTestById(id: number): Observable<TestModel> {
        return this.http
            .get<TestWebEntity>(
                'http://5b8d40db7366ab0014a29bfa.mockapi.io/api/v1/tests/${id}'
            )
            .pipe(map(this.mapper.mapFrom));
    }

    getAllTests(): Observable<TestModel> {
        return this.http
            .get<TestWebEntity[]>(
                'http://5b8d40db7366ab0014a29bfa.mockapi.io/api/v1/tests'
            )
            .pipe(flatMap((item) => item))
            .pipe(map(this.mapper.mapFrom));
    }
}
