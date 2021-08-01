import { IErrorOptions, IStandardArguments, NativeError } from './Native';
import { ErrorTool } from './Tools';

export interface IAuthenticationErrorOptions extends IErrorOptions {}

/**
 * Applicable when authentication fails for an authentication stream.
 */
export class AuthenticationError extends NativeError {
    public constructor();
    /**
     * @param message The error message that explains the reason for this error.
     */
    public constructor(message: string);
    /**
     * @param message The error message that explains the reason for this error.
     * @param innerError The error that is the cause of the current error. Stack trace will be appended.
     */
    public constructor(message: string, innerError: Error);
    /**
     * @param options The constructor options.
     */
    public constructor(options: IAuthenticationErrorOptions);

    public constructor(...args: IStandardArguments<IAuthenticationErrorOptions>) {
        super(ErrorTool.parseStandardArguments(...args));
    }
}
