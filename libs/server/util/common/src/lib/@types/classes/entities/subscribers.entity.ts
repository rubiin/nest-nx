import { Entity, Property } from "@mikro-orm/core";

import { BaseEntity } from "../base.entity";

@Entity()
export class Subscriber extends BaseEntity {
	@Property({ index: true, unique: true })
	email!: string;
}
