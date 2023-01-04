import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { AuthenticationError } from 'apollo-server-core';
import { AuthToken } from '../types/auth-token.type';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  getAuthToken(token: string): AuthToken {
    if (token === (this.configService.get('TOKEN') as string)) {
      const jwt = this.jwtService.sign({
        token,
        expiration: this.configService.get('JWT_TIME'),
      });
      return {
        Authorization: jwt,
      };
    } else {
      throw new AuthenticationError('Invalid token.');
    }
  }

  async verifyAuthToken(token: string): Promise<Boolean> {
    if (token === (this.configService.get('TOKEN') as string)) {
      return true;
    } else {
      throw new AuthenticationError('Invalid token.');
    }
  }
}
