import { Entity, ManyToOne, Property, Ref, Rel } from "@mikro-orm/core";

import { BaseEntity } from "../classes/base.entity";
import { User } from "./user.entity";

@Entity()
export class PointRedemptionLog extends BaseEntity {
  @Property()
points!: number;

  @Property({ columnType: "numeric(9,2)" })
amount!: string;

  @ManyToOne()
user!: Rel<Ref<User>>;

  constructor(partial?: Partial<PointRedemptionLog>) {
    super();
    Object.assign(this, partial);
  }
}
