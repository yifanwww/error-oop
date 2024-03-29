import { IErrorArguments, IErrorOptions, NativeError } from './Native';
import { InternalErrorTool } from './InternalTools';

export interface INotFoundErrorOptions extends IErrorOptions {
    entityName?: string;
}

/**
 * Applicable when an attempt to retrieve data yielded no result.
 */
export class NotFoundError extends NativeError {
    protected _entityName: string | null;

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
     * @param entityName The entity which is not found.
     */
    public constructor(message: string, entityName: string);
    /**
     * @param message The error message that explains the reason for this error.
     * @param entityName The entity which is not found.
     * @param innerError The error that is the cause of the current error. Stack trace will be appended.
     */
    public constructor(message: string, entityName: string, innerError: Error);
    /**
     * @param options The constructor options.
     */
    public constructor(options: INotFoundErrorOptions);

    public constructor(...args: IErrorArguments<INotFoundErrorOptions, ['entityName']>) {
        const options = InternalErrorTool.parseErrorArguments(['entityName'], ...args);

        super(options);

        this._entityName = options.entityName ?? null;
        this._setNonEnumerable('_entityName');
    }

    public get entityName(): string | null {
        return this._entityName;
    }
}
