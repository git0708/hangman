const crypto = require('crypto');

async function generateUUID(req, res, next) {
    res.status(200).send(crypto.randomUUID());
}
module.exports = { generateUUID };