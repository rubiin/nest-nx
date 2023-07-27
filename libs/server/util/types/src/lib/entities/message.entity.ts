import { Entity, ManyToOne, Property, Rel } from "@mikro-orm/core";

import { BaseEntity } from "../classes/base.entity";
import { Conversation, User } from "./index";

@Entity()
export class Message extends BaseEntity {
	@Property()
	body!: string;

	@ManyToOne({
		eager: false,
		index: true,
	})
	sender: Rel<User>;

	@ManyToOne({
		eager: false,
		index: true,
	})
	conversation!: Rel<Conversation>;

	@Property()
	isRead? = false;

	@Property()
	readAt?: Date;

	constructor(partial?: Partial<Comment>) {
		super();
		Object.assign(this, partial);
	}
}
