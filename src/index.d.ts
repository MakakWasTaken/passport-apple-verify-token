/* eslint-disable @typescript-eslint/naming-convention */
import express from "express";
import passport from "passport";

type Options = {
  clientId?: string | string[];
  appleIdKeysUrl?: string;
  passReqToCallback?: boolean;
  appleIssuer?: string;
};

declare namespace PassportAppleToken {
  interface StrategyStatic {
    new (options: Options, verify: VerifyFunction): StrategyInstance;
    new (options: Options, verify: VerifyFunction): StrategyInstance;
  }

  type VerifyFunction = (
    accessToken: string,
    refreshToken: string,
    profile: Partial<passport.Profile>,
    done: (error: any, user?: any, info?: any) => void
  ) => void;

  interface StrategyInstance {
    name: string;
    authenticate: (req: express.Request, options?: Options) => void;
  }
}

declare const PassportAppleToken: PassportAppleToken.StrategyStatic;
export = PassportAppleToken;
