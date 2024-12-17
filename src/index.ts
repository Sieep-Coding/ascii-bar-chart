import { parseArgs } from "./cli/args";
import { renderBarChart } from "./charts/barChart";
import { Logger } from "./utils/logger";
import { sampleData } from "./data/sampleData";

const main = () => {
    const logger = new Logger();
    logger.info("Starting ASCII Bar Chart Generator...");

    const args = parseArgs();
}