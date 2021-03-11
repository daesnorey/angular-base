import { Observable } from 'rxjs';

import { TestModel } from '@domain/test.model';

export abstract class TestRepository {
    abstract getTestById(id: number): Observable<TestModel>;
    abstract getAllTests(): Observable<TestModel>;
}
