import chalk from "chalk";
/**
 * Renders ASCII Bar Chart
 * @param data - Array of numbers to display
 */
export const renderBarChart = (data: number[]) => {
    const maxValue = Math.max(...data);
    console.log(chalk.white.bold("\nASCII Bar Chart:\n"));

    data.forEach((value, index) => {
        const barLength = Math.max(1, Math.floor((value / maxValue) * 40));
        const bar = "🟣".repeat(barLength);
        console.log(`${chalk.white(`Item ${index + 1}:`)} ${bar} (${value})`);
    });
    console.log(chalk.green("\nChart Complete!\n"));
}