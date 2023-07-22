import { BaseEntity } from "../base.entity";
import { Entity, ManyToOne, Property, Rel } from "@mikro-orm/core";

import { User } from "./user.entity";

@Entity()
export class PointRedemptionLog extends BaseEntity {
	@Property()
	points!: number;

	@Property({ columnType: "numeric(9,2)" })
	amount!: string;

	@ManyToOne()
	user!: Rel<User>;

	constructor(partial?: Partial<PointRedemptionLog>) {
		super();
		Object.assign(this, partial);
	}
}
