import { pbkdf2Sync, randomBytes } from 'crypto';

export const Salt = randomBytes(16).toString('hex').substring(0, 16);

export const HashedPassword = (password: string, salt: string) =>
  pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
