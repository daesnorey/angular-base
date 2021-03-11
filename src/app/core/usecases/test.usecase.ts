import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { UseCase } from '@base/use-case';
import { TestModel } from '@domain/test.model';
import { TestRepository } from '@repository/test.repository';

@Injectable({
    providedIn: 'root',
})
export class GetAllTestsUsecase implements UseCase<void, TestModel> {
    constructor(private testRepository: TestRepository) {}

    execute(params: void): Observable<TestModel> {
        return this.testRepository.getAllTests();
    }
}
