import { Repository } from 'typeorm';
import { DatabaseHelper } from '../../../core/database';
import { RequestHelper } from '../../../helpers/request';
import { Image } from './image.model';
import { Property } from '../../property/domain';
export declare class ImageDomainFacade {
    private repository;
    private databaseHelper;
    constructor(repository: Repository<Image>, databaseHelper: DatabaseHelper);
    create(values: Partial<Image>): Promise<Image>;
    update(item: Image, values: Partial<Image>): Promise<Image>;
    delete(item: Image): Promise<void>;
    findMany(queryOptions?: RequestHelper.QueryOptions<Image>): Promise<Image[]>;
    findOneByIdOrFail(id: string, queryOptions?: RequestHelper.QueryOptions<Image>): Promise<Image>;
    findManyByProperty(item: Property, queryOptions?: RequestHelper.QueryOptions<Image>): Promise<Image[]>;
}
