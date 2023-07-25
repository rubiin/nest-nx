
import {RefreshTokensRepository,TokensService} from "@nestify/server/token"
import { UserModule } from "@nestify/server/user";
import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";

import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { FacebookStrategy, GoogleStrategy, JwtStrategy, MagicLoginStrategy } from "./strategies";

@Module({
	imports: [PassportModule, UserModule],
	controllers: [AuthController],
	providers: [
		AuthService,
		TokensService,
		RefreshTokensRepository,
		JwtStrategy,
		GoogleStrategy,
		FacebookStrategy,
		MagicLoginStrategy,
	],
	exports: [AuthService, JwtStrategy, TokensService, RefreshTokensRepository],
})
export class AuthModule {}
