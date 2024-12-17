import { parseArgs } from "./cli/args";
import { renderBarChart } from "./charts/barChart";
import { Logger } from "./utils/logger";
import { sampleData } from "./data/sampleData";

const main = () => {
    const logger = new Logger();
    logger.info("Starting ASCII Bar Chart Generator...");

    const args = parseArgs();

    try {
        const rawData = args.data
        ? args.data.split(",").map(Number)
        : sampleData;

        if (rawData.some(isNaN)) {
            logger.error("One or more value is not a number!");
            throw new Error("Invalid input: All values must be numbers.");
        }

        renderBarChart(rawData);
    } catch (error) {
        if ()
        process.exit(1);
    }
};

main();