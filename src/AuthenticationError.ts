import { InternalError } from './InternalError';

export class AuthenticationError extends InternalError {
    public constructor();
    public constructor(message: string);
    public constructor(message: string, innerError: Error);

    public constructor(message?: string, innerError?: Error) {
        super(message, innerError);
    }
}