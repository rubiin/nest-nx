import { Entity, Enum, Index, ManyToOne, Property, Ref, Rel } from "@mikro-orm/core";

import { BaseEntity } from "../classes/base.entity";
import { User } from "./user.entity";



export enum ReferralStatus {
	PENDING = "PENDING",
	COMPLETED = "COMPLETED",
}

@Entity()
export class Referral extends BaseEntity {
  @ManyToOne({
    index: true,
  })
referrer: Rel<Ref<User>>;

  @Property({
    index: true,
  })
mobileNumber: string;

  @Index()
  @Enum(() => ReferralStatus)
status = ReferralStatus.PENDING;
}
