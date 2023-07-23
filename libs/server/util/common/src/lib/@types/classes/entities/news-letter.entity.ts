
import { Entity, Property } from "@mikro-orm/core";

import { BaseEntity } from "../base.entity";

@Entity()
export class NewsLetter extends BaseEntity {
	@Property({ index: true, unique: true })
	name: string;

	@Property({ columnType: "text" })
	content!: string;

	@Property({ type: "date", nullable: true })
	sentAt?: Date;

	constructor(partial?: Partial<NewsLetter>) {
		super();
		Object.assign(this, partial);
	}
}
