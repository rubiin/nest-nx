import { BaseEntity } from "../base.entity";
import { Entity, Property } from "@mikro-orm/core";

@Entity()
export class Subscriber extends BaseEntity {
	@Property({ index: true, unique: true })
	email!: string;
}
