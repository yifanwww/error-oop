import { IErrorOptions, IStandardArguments, NativeError } from '../Native';
import { ErrorTool } from '../Tools';

export interface IIOErrorOptions extends IErrorOptions {}

/**
 * Applicable when an I/O error occurs.
 */
export class IOError extends NativeError {
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
    public constructor(options: IIOErrorOptions);

    public constructor(...args: IStandardArguments<IIOErrorOptions>) {
        super(ErrorTool.parseStandardArguments(...args));
    }
}
