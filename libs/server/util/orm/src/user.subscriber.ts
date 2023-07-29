import { EntityName, EventArgs, EventSubscriber } from "@mikro-orm/core";
import { HelperService } from "@nestify/server/util/nest-framework/helpers";
import { User } from "@nestify/server/util/types";
import { Injectable } from "@nestjs/common";

/* It's a class that implements the EventSubscriber interface, and it's responsible for hashing the
password before the user is created or updated */

@Injectable()
export class UserSubscriber implements EventSubscriber<User> {
	getSubscribedEntities(): EntityName<User>[] {
		return [User];
	}

	async beforeCreate(arguments_: EventArgs<User>): Promise<void> {
		if (arguments_.changeSet.payload?.password) {
			arguments_.entity.password = await HelperService.hashString(arguments_.entity.password);
		}
	}

	async beforeUpdate(arguments_: EventArgs<User>): Promise<void> {
		if (arguments_.changeSet.payload?.password) {
			arguments_.entity.password = await HelperService.hashString(arguments_.entity.password);
		}
	}
}
