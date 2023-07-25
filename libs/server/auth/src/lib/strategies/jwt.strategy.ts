
import { JwtPayload } from "@nestify/server/util/common";
import { Config } from "@nestify/server/util/config";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

import { AuthService } from "../auth.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(
		private readonly authService: AuthService,
		config: ConfigService<Config, true>,
	) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: config.get("jwt.secret", { infer: true }),
			ignoreExpiration: false,
		});
	}

	/**
	 *
	 * @description Validate the token and return the user
	 * @param payload string
	 * @returns User
	 *
	 */

	async validate(payload: JwtPayload) {
		const { sub: id } = payload;

		// Accept the JWT and attempt to validate it using the user service
		const user = await this.authService.findUser(id);

		if (!user) {
			throw new UnauthorizedException();
		}

		return user;
	}
}
