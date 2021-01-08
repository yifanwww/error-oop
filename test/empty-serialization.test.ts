import {
    AlreadyInUseError,
    ArgumentError,
    ArgumentNullError,
    ArgumentOutOfRangeError,
    AuthenticationError,
    AuthenticationRequiredError,
    ConnectionError,
    DirectoryNotFoundError,
    DriveNotFoundError,
    EndOfStreamError,
    ErrorPro,
    FileLoadError,
    FileNotFoundError,
    InvalidOperationError,
    IOError,
    NotFoundError,
    NotImplementedError,
    NotPermittedError,
    NotSupportedError,
    OutOfMemoryError,
    PathTooLongError,
    RangeErrorPro,
    ReferenceErrorPro,
    SocketError,
    StackOverflowError,
    SyntaxErrorPro,
    TimeoutError,
    TypeErrorPro,
    URIErrorPro,
} from '../src';

import { switches } from './switches';

describe('Native-Errors-Pro', () => {
    if (!switches.emptySerialization.nativeErrorsPro) {
        test.skip('skip', () => {});
        return;
    }

    test('ErrorPro', () => {
        const err1 = new ErrorPro();
        const err2 = new ErrorPro('error');
        const err3 = new ErrorPro('error', err2);

        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
    });

    test('RangeErrorPro', () => {
        const err1 = new RangeErrorPro();
        const err2 = new RangeErrorPro('error');
        const err3 = new RangeErrorPro('error', err2);

        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
    });

    test('ReferenceErrorPro', () => {
        const err1 = new ReferenceErrorPro();
        const err2 = new ReferenceErrorPro('error');
        const err3 = new ReferenceErrorPro('error', err2);

        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
    });

    test('SyntaxErrorPro', () => {
        const err1 = new SyntaxErrorPro();
        const err2 = new SyntaxErrorPro('error');
        const err3 = new SyntaxErrorPro('error', err2);

        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
    });

    test('TypeErrorPro', () => {
        const err1 = new TypeErrorPro();
        const err2 = new TypeErrorPro('error');
        const err3 = new TypeErrorPro('error', err2);

        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
    });

    test('URIErrorPro', () => {
        const err1 = new URIErrorPro();
        const err2 = new URIErrorPro('error');
        const err3 = new URIErrorPro('error', err2);

        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
    });
});

describe('More-Useful-Errors', () => {
    if (!switches.emptySerialization.moreUsefulErrors) {
        test.skip('skip', () => {});
        return;
    }

    test('AlreadyInUseError', () => {
        const err1 = new AlreadyInUseError('object');
        const err2 = new AlreadyInUseError('object', 'obj1');
        const err3 = new AlreadyInUseError('object', 'obj1', 'obj2');
        const err4 = new AlreadyInUseError('object', 'obj1', 'obj2', 'obj3');
        const err5 = new AlreadyInUseError('object', 'obj1', 'obj2', 'obj3', 'obj4');

        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
        expect(JSON.stringify(err4)).toBe('{}');
        expect(JSON.stringify(err5)).toBe('{}');
    });

    test('ArgumentError', () => {
        const err1 = new ArgumentError();
        const err2 = new ArgumentError('error');
        const err3 = new ArgumentError('error', err2);
        const err4 = new ArgumentError('error', 'parameter');
        const err5 = new ArgumentError('error', 'parameter', err4);

        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
        expect(JSON.stringify(err4)).toBe('{}');
        expect(JSON.stringify(err5)).toBe('{}');
    });

    test('ArgumentNullError', () => {
        const err1 = new ArgumentNullError();
        const err2 = new ArgumentNullError('error');
        const err3 = new ArgumentNullError('error', err2);
        const err4 = new ArgumentNullError('error', 'parameter');
        const err5 = new ArgumentNullError('error', 'parameter', err4);

        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
        expect(JSON.stringify(err4)).toBe('{}');
        expect(JSON.stringify(err5)).toBe('{}');
    });

    test('ArgumentOutOfRangeError', () => {
        const err1 = new ArgumentOutOfRangeError();
        const err2 = new ArgumentOutOfRangeError('error');
        const err3 = new ArgumentOutOfRangeError('error', err2);
        const err4 = new ArgumentOutOfRangeError('error', 'parameter');
        const err5 = new ArgumentOutOfRangeError('error', 'parameter', err4);
        const err6 = new ArgumentOutOfRangeError('error', 'parameter', 'value');
        const err7 = new ArgumentOutOfRangeError('error', 'parameter', 'value', err5);

        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
        expect(JSON.stringify(err4)).toBe('{}');
        expect(JSON.stringify(err5)).toBe('{}');
        expect(JSON.stringify(err6)).toBe('{}');
        expect(JSON.stringify(err7)).toBe('{}');
    });

    test('AuthenticationError', () => {
        const err1 = new AuthenticationError();
        const err2 = new AuthenticationError('error');
        const err3 = new AuthenticationError('error', err2);

        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
    });

    test('AuthenticationRequiredError', () => {
        const err1 = new AuthenticationRequiredError();
        const err2 = new AuthenticationRequiredError('error');
        const err3 = new AuthenticationRequiredError('error', err2);

        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
    });

    test('ConnectionError', () => {
        const err1 = new ConnectionError();
        const err2 = new ConnectionError('error');
        const err3 = new ConnectionError('error', err2);

        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
    });

    test('InvalidOperationError', () => {
        const err1 = new InvalidOperationError();
        const err2 = new InvalidOperationError('error');
        const err3 = new InvalidOperationError('error', err2);

        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
    });

    test('IO.DirectoryNotFoundError', () => {
        const err1 = new DirectoryNotFoundError();
        const err2 = new DirectoryNotFoundError('error');
        const err3 = new DirectoryNotFoundError('error', err2);

        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
    });

    test('IO.DriveNotFoundError', () => {
        const err1 = new DriveNotFoundError();
        const err2 = new DriveNotFoundError('error');
        const err3 = new DriveNotFoundError('error', err2);

        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
    });

    test('IO.EndOfStreamError', () => {
        const err1 = new EndOfStreamError();
        const err2 = new EndOfStreamError('error');
        const err3 = new EndOfStreamError('error', err2);

        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
    });

    test('IO.FileLoadError', () => {
        const err1 = new FileLoadError();
        const err2 = new FileLoadError('error');
        const err3 = new FileLoadError('error', err2);
        const err4 = new FileLoadError('error', 'file1.txt');
        const err5 = new FileLoadError('error', 'file2.txt', err4);

        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
        expect(JSON.stringify(err4)).toBe('{}');
        expect(JSON.stringify(err5)).toBe('{}');
    });

    test('IO.FileNotFoundError', () => {
        const err1 = new FileNotFoundError();
        const err2 = new FileNotFoundError('error');
        const err3 = new FileNotFoundError('error', err2);
        const err4 = new FileNotFoundError('error', 'file3.txt');
        const err5 = new FileNotFoundError('error', 'file4.txt', err4);

        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
        expect(JSON.stringify(err4)).toBe('{}');
        expect(JSON.stringify(err5)).toBe('{}');
    });

    test('IO.IOError', () => {
        const err1 = new IOError();
        const err2 = new IOError('error');
        const err3 = new IOError('error', err2);

        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
    });

    test('IO.PathTooLongError', () => {
        const err1 = new PathTooLongError();
        const err2 = new PathTooLongError('error');
        const err3 = new PathTooLongError('error', err2);

        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
    });

    test('IO.SocketError', () => {
        const err1 = new SocketError();
        const err2 = new SocketError('error');
        const err3 = new SocketError('error', err2);

        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
    });

    test('NotFoundError', () => {
        const err1 = new NotFoundError();
        const err2 = new NotFoundError('error');
        const err3 = new NotFoundError('error', err2);
        const err4 = new NotFoundError('error', 'args');
        const err5 = new NotFoundError('error', 'args', err4);

        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
        expect(JSON.stringify(err4)).toBe('{}');
        expect(JSON.stringify(err5)).toBe('{}');
    });

    test('NotImplementedError', () => {
        const err1 = new NotImplementedError();
        const err2 = new NotImplementedError('error');
        const err3 = new NotImplementedError('error', err2);

        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
    });

    test('NotPermittedError', () => {
        const err1 = new NotPermittedError();
        const err2 = new NotPermittedError('error');
        const err3 = new NotPermittedError('error', err2);

        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
    });

    test('NotSupportedError', () => {
        const err1 = new NotSupportedError();
        const err2 = new NotSupportedError('error');
        const err3 = new NotSupportedError('error', err2);

        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
    });

    test('OutOfMemoryError', () => {
        const err1 = new OutOfMemoryError();
        const err2 = new OutOfMemoryError('error');
        const err3 = new OutOfMemoryError('error', err2);

        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
    });

    test('StackOverflowError', () => {
        const err1 = new StackOverflowError();
        const err2 = new StackOverflowError('error');
        const err3 = new StackOverflowError('error', err2);

        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
    });

    test('TimeoutError', () => {
        const err1 = new TimeoutError();
        const err2 = new TimeoutError('error');
        const err3 = new TimeoutError('error', err2);

        expect(JSON.stringify(err1)).toBe('{}');
        expect(JSON.stringify(err2)).toBe('{}');
        expect(JSON.stringify(err3)).toBe('{}');
    });
});
