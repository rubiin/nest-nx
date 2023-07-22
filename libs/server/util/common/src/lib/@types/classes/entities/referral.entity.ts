

import { BaseEntity } from "../base.entity";
import { Entity, Enum, Index, ManyToOne, Property, Rel } from "@mikro-orm/core";

import { User } from "./user.entity";
import { ReferralStatus } from "../../enums";

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
