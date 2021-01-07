import { ErrorOptions, FileLoadErrorMessageProps, FileLoadErrorProps } from '../CommonTypes';
import { _IOError } from './IOError';

export class _FileLoadError extends _IOError {
    private _fileName?: string;

    public constructor(
        props: FileLoadErrorProps,
        options: ErrorOptions<FileLoadErrorMessageProps>,
    ) {
        const { fileName } = props;
        const { generateMessage: gm, ...others } = options;

        super(props, {
            generateMessage: gm && ((_props) => gm({ ..._props, fileName })),
            ...others,
        });

        this._fileName = fileName;
        this._setNonEnumerable('_fileName');
    }

    public get fileName() {
        return this._fileName;
    }
}

/**
 * Applicable when a managed assembly is found but cannot be loaded.
 */
export class FileLoadError extends _FileLoadError {
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
    /**
     * @param message The error message that explains the reason for this error.
     * @param fileName A String containing the name of the file that was not loaded.
     */
    public constructor(message: string, fileName: string);
    /**
     * @param message The error message that explains the reason for this error.
     * @param fileName A String containing the name of the file that was not loaded.
     * @param innerError The error that is the cause of the current error. Stack trace will be
     * appended.
     */
    public constructor(message: string, fileName: string, innerError: Error);

    public constructor(message: string = '', arg1?: string | Error, arg2?: Error) {
        // message + innerError?
        if (arg1 === undefined || typeof arg1 !== 'string') {
            super({ message, innerError: arg1 }, {});
        }

        // message + fileName + innerError?
        else {
            super({ message, fileName: arg1, innerError: arg2 }, {});
        }
    }
}
