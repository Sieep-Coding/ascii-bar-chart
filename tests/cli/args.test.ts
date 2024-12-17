import { parseArgs } from '../../src/cli/args';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

jest.mock('yargs', () => ({
    __esModule: true,
    default: jest.fn(() => ({
        usage: jest.fn().mockReturnThis(),
        option: jest.fn().mockReturnThis(),
        help: jest.fn().mockReturnThis(),
        parseSync: jest.fn(),
    })),
}));

describe('parseArgs', () => {
    it('should correctly parse the data argument when passed valid input', () => {
        process.argv = ['node', 'script.js', '--data', '1,2,3'];

        (yargs as jest.Mock).mockReturnValueOnce({
            parseSync: jest.fn().mockReturnValue({ data: '1,2,3' }),
        });

        const parsedArgs = parseArgs();
        expect(parsedArgs.data).toBe('1,2,3');
    });

    it('should throw an error when the required data argument is missing', () => {
        process.argv = ['node', 'script.js'];

        (yargs as jest.Mock).mockReturnValueOnce({
            parseSync: jest.fn().mockImplementation(() => {
                throw new Error('Missing required argument: --data');
            }),
        });

        expect(() => parseArgs()).toThrow('Missing required argument: --data');
    });

    it('should correctly parse the data argument when passed invalid input', () => {
        process.argv = ['node', 'script.js', '--data', 'abc,xyz'];

        (yargs as jest.Mock).mockReturnValueOnce({
            parseSync: jest.fn().mockReturnValue({ data: 'abc,xyz' }),
        });

        const parsedArgs = parseArgs();
        expect(parsedArgs.data).toBe('abc,xyz');
    });

    it('should handle multiple values passed in the --data argument', () => {
        process.argv = ['node', 'script.js', '--data', '1,2,3,4,5'];

        (yargs as jest.Mock).mockReturnValueOnce({
            parseSync: jest.fn().mockReturnValue({ data: '1,2,3,4,5' }),
        });

        const parsedArgs = parseArgs();
        expect(parsedArgs.data).toBe('1,2,3,4,5');
    });
});