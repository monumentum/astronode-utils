const callRecursive = (promises, index, args) => {
    if (index + 1 === promises.length) {
        return promises[index](args);
    };

    return promises[index](args)
        .then(callRecursive.bind(null, promises, index + 1))
}

const normalize = promises =>
    typeof promises === 'function' ?
    [ promises ] : promises;

module.exports = promises => (req, res) =>
    callRecursive(normalize(promises), 0, req)
        .then(response => res.status(200).json(response))
        .catch(error => res.status(500).json({ error }));