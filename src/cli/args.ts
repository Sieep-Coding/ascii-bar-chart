import yargs from "yargs";
import { hideBin } from "yargs/helpers"

export const parseArgs = () => {
    return yargs(hideBin(process.argv))
    .usage("Usage: $0 --data [comma-separated values]")
    .option("data", {
        describe: "Comma-seperated list of numbers to visualize in the console.",
        type: "string",
        demandOption: true,
    })
    .help()
    .parseSync();
};