import { IGNORE_CACHING_META } from "@nestify/server/util/nest-framework/constant";
import { SetMetadata } from "@nestjs/common";

/**
 * It sets a metadata key called "ignoreCaching" to true
 */
export const NoCache = () => SetMetadata(IGNORE_CACHING_META, true);
