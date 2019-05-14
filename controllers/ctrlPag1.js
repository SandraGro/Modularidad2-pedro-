'use scrict'

const modelP1 = require('../models/modelPag1.js');
const pag1 = (req) => {
    var result = modelP1();
    return (JSON.stringify(result)); //
};

module.exports = pag1;