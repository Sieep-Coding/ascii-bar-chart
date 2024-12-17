import { renderBarChart } from "../../src/charts/barChart";

describe("renderBarChart", () => {
    it("should render bar chart without an error message occurring.", () => {
        const testData = [5, 15, 20];
        console.log = jest.fn();
        renderBarChart(testData);
        expect(console.log).toHaveBeenCalled();
    });
});