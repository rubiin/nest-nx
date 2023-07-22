import { EntityData, RequiredEntityData } from '@mikro-orm/core';
import { Observable } from 'rxjs';

import {
  PaginationRequest as TPaginationRequest,
  PaginationResponse,
} from './pagination.interface';
import { BaseEntity } from '../classes/base.entity';
import { User } from "../classes";

/**
 * common interface that enforces common methods for controller and service
 */
export interface Crud<
  Entity extends BaseEntity,
  PaginationRequest extends TPaginationRequest,
  CreateDto extends RequiredEntityData<Entity> = RequiredEntityData<Entity>,
  UpdateDto extends EntityData<Entity> = EntityData<Entity>
> {
  findAll(query: PaginationRequest): Observable<PaginationResponse<Entity>>;
  findOne(index: string): Observable<Entity>;

  create(body: CreateDto, user?: User): Observable<Entity>;

  update(index: string, body: UpdateDto): Observable<Entity>;

  remove(index: string): Observable<Entity>;
}
