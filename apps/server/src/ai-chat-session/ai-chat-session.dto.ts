export class InitSessionClientSecret {
  value: string;
  expires_at: number;
}

export class InitSessionResBody {
  client_secret: InitSessionClientSecret;
}
