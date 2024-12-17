import { main } from '../../src/index'; // Adjust this import according to your file structure
import { Logger } from '../../src/utils/logger';
import { parseArgs } from '../../src/cli/args';
import { renderBarChart } from '../../src/charts/barChart';

// Mocks
jest.mock('../../src/utils/logger');
jest.mock('../../src/cli/args');
jest.mock('../../src/charts/barChart');

describe('main function', () => {
    let parseArgsMock: jest.Mock;
    let renderBarChartMock: jest.Mock;

    beforeEach(() => {
        parseArgsMock = parseArgs as jest.Mock;
        renderBarChartMock = renderBarChart as jest.Mock;

        // Mock the console methods
        console.log = jest.fn();
        console.error = jest.fn();
    });

    it('should use sample data if no data argument is provided', () => {
        // Arrange
        parseArgsMock.mockReturnValueOnce({ data: undefined });
        const sampleData = [5, 15, 20, 25, 40, 35, 22, 9]; // Adjust this to the actual sampleData value used in your code
        renderBarChartMock.mockReturnValueOnce(undefined);

        // Act
        main();

        // Assert
        expect(renderBarChartMock).toHaveBeenCalledWith(sampleData);
    });
});
