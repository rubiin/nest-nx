import { JwtAuthGuard } from "@nestify/server/util/common";
import { API_UNAUTHORIZED_RESPONSE } from "@nestify/server/util/nest-framework/constant";
import { applyDecorators, CanActivate, Type, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiUnauthorizedResponse } from "@nestjs/swagger";


interface AuthGuard {
	guards?: Type<CanActivate>[];
	unauthorizedResponse?: string;
}

/**
 * It's a decorator that uses the JwtAuthGuard and PoliciesGuard guards, and returns an unauthorized // TODO: add policies guard
 * response if the user is not authenticated
 * @returns A function that returns a function
 *
 */

export const Auth = (options_?: AuthGuard) => {
	const options: AuthGuard = {
		guards: [JwtAuthGuard],
		unauthorizedResponse: API_UNAUTHORIZED_RESPONSE,
		...options_,
	};

	return applyDecorators(
		UseGuards(...options.guards),
		ApiBearerAuth(),
		ApiUnauthorizedResponse({ description: options.unauthorizedResponse }),
	);
};
