import { Mapper } from '@base/mapper';
import { TestModel } from '@domain/test.model';
import { TestWebEntity } from './test-web-entity';

export class TestWebRepositoryMapper extends Mapper<TestWebEntity, TestModel> {
    mapFrom(param: TestWebEntity): TestModel {
        return {
            name: param.name,
        };
    }

    mapTo(param: TestModel): TestWebEntity {
        return {
            id: 0,
            name: param.name,
        };
    }
}
