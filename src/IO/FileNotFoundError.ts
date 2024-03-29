import { IErrorArguments } from '../Native';
import { InternalErrorTool } from '../InternalTools';
import { IIOErrorOptions, IOError } from './IOError';

export interface IFileNotFoundErrorOptions extends IIOErrorOptions {
    /**
     * The full name of the file with the invalid image.
     */
    fileName?: string;
}

/**
 * Applicable when an attempt to access a file that does not exist on disk fails.
 */
export class FileNotFoundError extends IOError {
    private _fileName: string | null;

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
     * @param message The error message that explains the reason for this error.
     * @param fileName The full name of the file with the invalid image.
     */
    public constructor(message: string, fileName: string);
    /**
     * @param message The error message that explains the reason for this error.
     * @param fileName The full name of the file with the invalid image.
     * @param innerError The error that is the cause of the current error. Stack trace will be appended.
     */
    public constructor(message: string, fileName: string, innerError: Error);
    /**
     * @param options The constructor options.
     */
    public constructor(options: IFileNotFoundErrorOptions);

    public constructor(...args: IErrorArguments<IFileNotFoundErrorOptions, ['fileName']>) {
        const options = InternalErrorTool.parseErrorArguments(['fileName'], ...args);

        super(options);

        this._fileName = options.fileName ?? null;
        this._setNonEnumerable('_fileName');
    }

    public get fileName(): string | null {
        return this._fileName;
    }
}
