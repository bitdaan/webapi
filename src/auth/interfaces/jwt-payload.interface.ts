export interface JwtPayload {
    token: string;
    expiration?: Date;
}