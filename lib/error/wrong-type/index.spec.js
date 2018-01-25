const WrongType = require('./');

describe('WrongType', () => {
    it('should throw WrongType correctly', () => {
        const aditional = 'myMethod';
        const expected = 'bar';
        const received = 'foo';
        const theThrow = () => {
            throw new WrongType(received, expected, aditional);
        }

        expect(theThrow).toThrow(WrongType);
        expect(theThrow).toThrow(`<${aditional}> is expected ${expected} but receive ${received}`);
    });

    it('should throw WrongType correctly', () => {
        const expected = 'bar';
        const received = 'foo';
        const theThrow = () => {
            throw new WrongType(received, expected);
        }

        expect(theThrow).toThrow(WrongType);
        expect(theThrow).toThrow(`is expected ${expected} but receive ${received}`);
    });

    it('should throw WrongType correctly', () => {
        const expected = ['bar', 'zoo'];
        const received = ['foo', 'test'];
        const theThrow = () => {
            throw new WrongType(received, expected);
        }

        expect(theThrow).toThrow(WrongType);
        expect(theThrow).toThrow(`is expected ${expected.join(" or ")} but receive ${received.join(" or ")}`);
    });
});