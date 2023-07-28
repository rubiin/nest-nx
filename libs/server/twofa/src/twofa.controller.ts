import { AuthenticationResponse } from "@nestify/api-interfaces";
import { AuthService } from "@nestify/server/auth";
import {
	Auth,
	GenericController,
	LoggedInUser,
} from "@nestify/server/util/nest-framework/decorators";
import { User } from "@nestify/server/util/types";
import { Body, Post, Res, UnauthorizedException, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ApiBearerAuth } from "@nestjs/swagger";
import { Response } from "express";
import { Observable, switchMap, throwError } from "rxjs";

import { TwofaDto } from "./dtos/twofa.dto";
import { TwoFactorService } from "./twofa.service";

@GenericController("2fa", false)
export class TwoFactorController {
	constructor(
		private readonly twoFactorAuthenticationService: TwoFactorService,
		private readonly authService: AuthService,
	) {}

	@Post("generate")
	@UseGuards(AuthGuard("jwt2fa"))
	register(@Res() response: Response, @LoggedInUser() user: User): Observable<unknown> {
		return this.twoFactorAuthenticationService.generateTwoFactorSecret(user).pipe(
			switchMap(({ otpAuthUrl }) => {
				return this.twoFactorAuthenticationService.pipeQrCodeStream(response, otpAuthUrl);
			}),
		);
	}

	@ApiBearerAuth()
	@Post("authenticate")
	@UseGuards(AuthGuard("jwt2fa"))
	authenticate(
		@LoggedInUser() user: User,
		@Body() twoFaAuthDto: TwofaDto,
	): Observable<AuthenticationResponse> {
		const isCodeValid = this.twoFactorAuthenticationService.isTwoFactorCodeValid(
			twoFaAuthDto.code,
			user,
		);

		if (!isCodeValid) {
			return throwError(() => new UnauthorizedException());
		}

		return this.authService.login(user, true);
	}

	@Auth()
	@Post("turn-on")
	turnOnTwoFactorAuthentication(
		@LoggedInUser() user: User,
		@Body() dto: TwofaDto,
	): Observable<User> {
		return this.twoFactorAuthenticationService.turnOnTwoFactorAuthentication(dto.code, user);
	}
}
