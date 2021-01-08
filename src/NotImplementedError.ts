import {
    ErrorOptions,
    NotImplementedErrorMessageProps,
    NotImplementedErrorProps,
} from './CommonTypes';
import { _Error } from './NativeErrors';

export class _NotImplementedError extends _Error {
    public constructor(
        props: NotImplementedErrorProps,
        options: ErrorOptions<NotImplementedErrorMessageProps>,
    ) {
        super(props, options);
    }
}

/**
 * Applicable when a requested method or operation is not implemented.
 */
export class NotImplementedError extends _NotImplementedError {
    public constructor();
    /**
     * @param message The error message that explains the reason for this error.
     */
    public constructor(message: string);
    /**
     * @param message The error message that explains the reason for this error.
     * @param innerError The error that is the cause of the current error. Stack trace will be
     * appended.
     */
    public constructor(message: string, innerError: Error);

    public constructor(message: string = '', innerError?: Error) {
        super({ message, innerError }, {});
    }
}
