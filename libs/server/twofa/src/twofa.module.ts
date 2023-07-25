import { AuthModule, JwtTwofaStrategy } from "@nestify/server/auth";
import { Module } from "@nestjs/common";

import { TwoFactorController } from "./twofa.controller";
import { TwoFactorService } from "./twofa.service";

@Module({
	imports: [AuthModule],
	controllers: [TwoFactorController],
	providers: [TwoFactorService, JwtTwofaStrategy],
})
export class TwoFactorModule {}
