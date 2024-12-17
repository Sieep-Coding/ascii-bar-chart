import chalk from "chalk";

/**
 * Renders ASCII Bar Chart
 * @param data - Array of numbers to display
 */
export const renderBarChart = (data: number[]) => {
    const maxValue = Math.max(...data);
    console.log(chalk.bold("\nASCII Bar Chart:\n"));

    data.forEach((value, index) => {
        const bar = "█".repeat(Math.floor(value / maxValue) * 40);
        console.log(`${chalk.blue(`Item ${index + 1}:`)} ${bar} (${value})`);
    });
    console.log(chalk.green("\nChart Complete!\n"));
}