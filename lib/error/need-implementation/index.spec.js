const NeedImplementation = require('./');

describe('NeedImplementation', () => {
    it('should throw NeedImplementation correctly', () => {
        const method = 'myMethod';
        const theThrow = () => {
            throw new NeedImplementation(method);
        }

        expect(theThrow).toThrow(NeedImplementation);
        expect(theThrow).toThrow(`Miss implementation for method ${method}, check the docs.`);
    });
});