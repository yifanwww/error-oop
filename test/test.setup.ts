import path from 'path';

type Output = (...data: unknown[]) => void;

function outputFactory(outputImpl: Output): Output {
    const filter = __dirname.split(path.sep).slice(-3).join(path.sep);

    const output: Output = (...data) => {
        const obj = {};
        Error.captureStackTrace(obj, output);
        // @ts-ignore
        const { stack } = obj;

        if (!stack.split('\n')[1].includes(filter)) {
            outputImpl(...data);
        }
    };

    return output;
}

function wrapConsoleOutput() {
    console.debug = outputFactory(console.debug);
    console.error = outputFactory(console.error);
    console.info = outputFactory(console.info);
    console.log = outputFactory(console.log);
    console.warn = outputFactory(console.warn);
}

function setupJest(): void {
    wrapConsoleOutput();
}

setupJest();
