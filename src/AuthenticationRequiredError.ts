import { AuthenticationRequiredErrorProps } from './CommonTypes';
import { AbstractError } from './Native';

export abstract class AbstractAuthenticationRequiredError extends AbstractError {
    public constructor(props: AuthenticationRequiredErrorProps) {
        super(props);
    }
}

/**
 * Applicable when authentication fails for an authentication stream.
 */
export class AuthenticationRequiredError extends AbstractAuthenticationRequiredError {
    public constructor();
    /**
     * @param message The error message that explains the reason for this error.
     */
    public constructor(message: string);
    /**
     * @param message The error message that explains the reason for this error.
     * @param innerError The error that is the cause of the current error. Stack trace will be append.
     */
    public constructor(message: string, innerError: Error);

    public constructor(message: string = '', innerError?: Error) {
        super({ message, innerError });
    }
}
