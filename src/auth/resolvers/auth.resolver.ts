import { Args, Query, Resolver } from '@nestjs/graphql';
import { AuthToken } from '../types/auth-token.type';
import { AuthService } from '../services/auth.service';

@Resolver((of) => AuthToken)
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Query((returns) => AuthToken)
  getAuthToken(
    @Args('token')
    token: string,
  ) {
    return this.authService.getAuthToken(token);
  }
}
