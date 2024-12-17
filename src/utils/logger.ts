import chalk from "chalk";

export class Logger {
    static mockImplementation(arg0: () => { info: jest.Mock<any, any, any>; error: jest.Mock<any, any, any>; }): jest.Mock<any, any, any> {
        throw new Error('Method not implemented.');
    }
    info(message: string) {
        console.log(chalk.cyan(`[INFO]: ${message}`));
    }

    error(message: string) {
        console.error(chalk.red(`[ERROR]: ${message}`));
    }
}