export interface LoginCredentials {
  email: string;
  password: string;
}

export interface TwoFactorCredentials {
  email: string;
  code: string;
}
