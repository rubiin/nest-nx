import { Inject } from "@nestjs/common";

import { NEST_CONFIG_MODULE } from "./config.provider";

export const InjectConfig = (): ReturnType<typeof Inject> => Inject(NEST_CONFIG_MODULE);
