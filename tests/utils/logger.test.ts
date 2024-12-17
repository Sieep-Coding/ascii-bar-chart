import { Logger } from '../../src/utils/logger';
import chalk from "chalk";

const testMsg = 'Test log message'
const errorMessage = chalk.red('[ERROR]: Test log message');
const testMessage = chalk.cyan('[INFO]: Test log message')
const logger = new Logger();

describe("Logger", () => {
    it("should always log messages successfully.", () => {
        console.log = jest.fn();
        logger.info(testMsg)
        expect(console.log).toHaveBeenCalledWith(testMessage);
    });
});

describe("Logger-Error", () => {
    it("should always log error messages successfully.", () => {
        console.error = jest.fn();
        logger.error(testMsg)
        expect(console.error).toHaveBeenCalledWith(errorMessage);
    });
});