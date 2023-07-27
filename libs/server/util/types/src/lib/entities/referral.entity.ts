import { Entity, Enum, Index, ManyToOne, Property, Rel } from "@mikro-orm/core";

import { BaseEntity } from "../classes/base.entity";
import { ReferralStatus } from "../enums";
import { User } from "./user.entity";

@Entity()
export class Referral extends BaseEntity {
	@Index()
	@ManyToOne()
	referrer: Rel<User>;

	@Index()
	@Property()
	mobileNumber: string;

	@Index()
	@Enum(() => ReferralStatus)
	status = ReferralStatus.PENDING;
}
