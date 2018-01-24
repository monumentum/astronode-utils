const MissingParameter = require('./');

describe('MissingParameter', () => {
    it('should throw MissingParameter correctly', () => {
        const method = 'myMethod';
        const param = 'myParam';
        const theThrow = () => {
            throw new MissingParameter(method, param);
        }

        expect(theThrow).toThrow(MissingParameter);
        expect(theThrow).toThrow(`Method ${method} is missing the param(s): ${param}.`);
    });
});