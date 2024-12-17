import { parseArgs } from "./cli/args.ts";
import { renderBarChart } from "./charts/barChart.ts";
import { Logger } from "./utils/logger.ts";
import { sampleData } from "./data/sampleData.ts";

export const main = () => {
    const logger = new Logger();
    console.log("   ");
    logger.info("Starting ASCII Bar Chart Generator...");

    const args = parseArgs();

    try {
        const rawData = args.data
            ? args.data
                .split(",")
                .map((item) => item.trim())
                .filter(item => item.length > 0)
                .map(Number)
            : sampleData;

        if (rawData.some(isNaN)) {
            logger.error("One or more value is not a number!");
            throw new Error("Invalid input: All values must be numbers.");
        }

        renderBarChart(rawData);

    } catch (error) {
        if (error instanceof Error) {
            logger.error(error.message);
        } else {
            logger.error("Unknown error.");
        }
    }
};

main();