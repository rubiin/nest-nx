import { Factory, Faker } from "@mikro-orm/seeder";

import { Message } from "..";

/* `MessageFactory` is a factory that creates `Message` instances */
export class MessageFactory extends Factory<Message> {
	model = Message;

	definition(faker: Faker): Partial<Message> {
		return {
			body: faker.commerce.productDescription(),
		};
	}
}
