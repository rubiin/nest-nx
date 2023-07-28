import { ConfigService } from "@nestjs/config";

import { Config } from ".";

export const NEST_CONFIG_MODULE = "NEST_CONFIG_MODULE";

export const configFactory = {
	provide: NEST_CONFIG_MODULE,
	useFactory: async (nestConfigService: ConfigService<Config, true>) => {
		return nestConfigService;
	},
	inject: [ConfigService],
};
