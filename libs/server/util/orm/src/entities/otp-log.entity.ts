import { Entity, ManyToOne, Property, Ref, Rel } from "@mikro-orm/core";

import { BaseEntity } from "../classes/base.entity";
import { User } from "./user.entity";

@Entity()
export class OtpLog extends BaseEntity {
  @Property()
expiresIn!: Date;

  @Property({
    length: 20,
    index: true,
  })
otpCode?: string;

  @ManyToOne({
    eager: false,
    index: true,
  })
user: Rel<Ref<User>>;

  @Property()
isUsed? = false;

  constructor(partial?: Partial<OtpLog>) {
    super();
    Object.assign(this, partial);
  }
}
