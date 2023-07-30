import { Entity, Enum, Index, ManyToOne, Property, Rel } from "@mikro-orm/core";

import { BaseEntity } from "../classes/base.entity";
import { User } from "./user.entity";



export enum ReferralStatus {
	PENDING = "PENDING",
	COMPLETED = "COMPLETED",
}


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
