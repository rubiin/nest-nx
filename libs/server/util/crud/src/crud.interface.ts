import { EntityData, RequiredEntityData } from "@mikro-orm/core";
import { PaginationResponse } from "@nestify/server/util/nest-framework/pagination";
import { PaginationRequest as TPaginationRequest} from "@nestify/server/util/nest-framework/pagination";
import { BaseEntity ,User } from "@nestify/server/util/orm";
import { Observable } from "rxjs";


/**
 * common interface that enforces common methods for controller and service
 */
export interface Crud<
	Entity extends BaseEntity,
	PaginationRequest extends TPaginationRequest,
	CreateDto extends RequiredEntityData<Entity> = RequiredEntityData<Entity>,
	UpdateDto extends EntityData<Entity> = EntityData<Entity>,
> {
	findAll(query: PaginationRequest): Observable<PaginationResponse<Entity>>;
	findOne(index: string): Observable<Entity>;

	create(body: CreateDto, user?: User): Observable<Entity>;

	update(index: string, body: UpdateDto): Observable<Entity>;

	remove(index: string): Observable<Entity>;
}
