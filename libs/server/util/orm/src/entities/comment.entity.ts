import { Entity, ManyToOne, Property, Ref, Rel } from "@mikro-orm/core";

import { BaseEntity } from "../classes/base.entity";
import { Post, User } from "./index";

@Entity()
export class Comment extends BaseEntity {
  @Property()
body!: string;

  @ManyToOne({
    eager: false,
  })
  post!: Rel<Ref<Post>>;

  @ManyToOne({
    eager: false,
    index: true,
  })
author!: Rel<Ref<User>>;

  constructor(partial?: Partial<Comment>) {
    super();
    Object.assign(this, partial);
  }
}
