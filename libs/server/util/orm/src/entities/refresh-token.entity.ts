import { Entity, ManyToOne, Property, Ref, Rel } from "@mikro-orm/core";

import { BaseEntity } from "../classes/base.entity";
import { User } from "./user.entity";

@Entity()
export class RefreshToken extends BaseEntity {
  @Property()
expiresIn!: Date;

  @ManyToOne({
    eager: false,
  })
user: Rel<Ref<User>>;

  @Property()
isRevoked? = false;

  constructor(partial?: Partial<RefreshToken>) {
    super();
    Object.assign(this, partial);
  }
}
