import { Entity, ManyToOne, Property, Ref, Rel } from "@mikro-orm/core";

import { BaseEntity } from "../classes/base.entity";
import { Conversation, Post } from "./index";

@Entity()
export class Message extends BaseEntity {
  @Property()
  body!: string;

  @ManyToOne({
    eager: false,
    index: true,
  })
  sender: Rel<Ref<Post>>;

  @ManyToOne({
    eager: false,
    index: true,
  })
  conversation!: Rel<Ref<Conversation>>;

  @Property()
  isRead? = false;

  @Property()
  readAt?: Date;

  constructor(partial?: Partial<Comment>) {
    super();
    Object.assign(this, partial);
  }
}
