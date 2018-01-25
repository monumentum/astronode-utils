const normalizeText = entry => {
    if (entry && typeof entry !== 'string') {
        return entry.join(" or ");
    }

    return entry;
}

class WrongType extends Error {
    static renderTemplate(received, expected, aditional) {
        aditional = aditional ? `<${aditional}> ` : '';
        return `${aditional}is expected ${normalizeText(expected)} but receive ${normalizeText(received)}`;
    }

    constructor(received, expected, aditional) {
        super(WrongType.renderTemplate(received, expected, aditional));
        Error.captureStackTrace(this, WrongType);
    }
}

module.exports = WrongType;