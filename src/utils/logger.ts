import chalk from "../../node_modules/chalk/source/index";

export class Logger {
    info(message: string) {
        console.log(chalk.cyan(`[INFO]: ${message}`));
    }

    error(message: string) {
        console.error(chalk.red(`[ERROR]: ${message}`));
    }
}